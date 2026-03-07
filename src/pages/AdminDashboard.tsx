import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { AdminToolsManager } from "@/components/admin/AdminToolsManager";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { ArrowLeft, Plus, Pencil, Trash2, LogOut, Upload, Eye } from "lucide-react";
import logo from "@/assets/logo.svg";

interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string | null;
  category: string;
  image_url: string;
  is_published: boolean;
  published_at: string | null;
}

const AdminDashboard = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Article | null>(null);
  const [creating, setCreating] = useState(false);
  const navigate = useNavigate();

  // Form state
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isPublished, setIsPublished] = useState(false);
  const [publishedAt, setPublishedAt] = useState("");

  // SEO fields
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [ogTitle, setOgTitle] = useState("");
  const [ogDescription, setOgDescription] = useState("");

  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    checkAuth();
    fetchArticles();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      navigate("/admin/login");
      return;
    }
    const { data: roles } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", session.user.id)
      .eq("role", "admin");

    if (!roles || roles.length === 0) {
      await supabase.auth.signOut();
      navigate("/admin/login");
    }
  };

  const fetchArticles = async () => {
    // Use service role via edge function or just fetch all for admin
    // Since RLS allows select on published, we need a workaround
    // Admin can see all articles via their own query
    const { data, error } = await supabase
      .from("articles")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) setArticles(data);
    setLoading(false);
  };

  const resetForm = () => {
    setTitle("");
    setSlug("");
    setExcerpt("");
    setContent("");
    setCategory("");
    setImageUrl("");
    setIsPublished(false);
    setPublishedAt("");
    setMetaTitle("");
    setMetaDescription("");
    setOgTitle("");
    setOgDescription("");
  };

  const parseSeoFromContent = (rawContent: string) => {
    const seoMatch = rawContent.match(/<!--SEO\n([\s\S]*?)-->/);
    let htmlContent = rawContent;
    let seo = { meta_title: "", meta_description: "", og_title: "", og_description: "" };
    
    if (seoMatch) {
      htmlContent = rawContent.replace(/<!--SEO\n[\s\S]*?-->\n?/, "").trim();
      const lines = seoMatch[1].split("\n");
      lines.forEach(line => {
        const [key, ...rest] = line.split(": ");
        const value = rest.join(": ").trim();
        if (key.trim() === "meta_title") seo.meta_title = value;
        if (key.trim() === "meta_description") seo.meta_description = value;
        if (key.trim() === "og_title") seo.og_title = value;
        if (key.trim() === "og_description") seo.og_description = value;
      });
    }
    return { htmlContent, seo };
  };

  const loadArticle = (article: Article) => {
    setTitle(article.title);
    setSlug(article.slug);
    setExcerpt(article.excerpt);
    setCategory(article.category);
    setImageUrl(article.image_url);
    setIsPublished(article.is_published);
    setPublishedAt(article.published_at?.slice(0, 10) || "");
    
    const { htmlContent, seo } = parseSeoFromContent(article.content || "");
    setContent(htmlContent);
    setMetaTitle(seo.meta_title);
    setMetaDescription(seo.meta_description);
    setOgTitle(seo.og_title);
    setOgDescription(seo.og_description);
    
    setEditing(article);
    setCreating(false);
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const ext = file.name.split(".").pop();
    const fileName = `${Date.now()}.${ext}`;

    const { error } = await supabase.storage
      .from("article-images")
      .upload(fileName, file);

    if (error) {
      toast({ title: "Erreur upload", description: error.message, variant: "destructive" });
    } else {
      const { data: urlData } = supabase.storage
        .from("article-images")
        .getPublicUrl(fileName);
      setImageUrl(urlData.publicUrl);
      toast({ title: "Image uploadée" });
    }
    setUploading(false);
  };

  const handleSave = async () => {
    if (!title || !slug || !excerpt || !category || !imageUrl) {
      toast({ title: "Champs requis manquants", variant: "destructive" });
      return;
    }

    // Build content with SEO meta embedded as HTML comment
    const seoMeta = `<!--SEO
meta_title: ${metaTitle}
meta_description: ${metaDescription}
og_title: ${ogTitle}
og_description: ${ogDescription}
-->
${content}`;

    const articleData = {
      title,
      slug,
      excerpt,
      content: seoMeta,
      category,
      image_url: imageUrl,
      is_published: isPublished,
      published_at: isPublished && publishedAt ? new Date(publishedAt).toISOString() : isPublished ? new Date().toISOString() : null,
    };

    if (editing) {
      const { error } = await supabase
        .from("articles")
        .update(articleData)
        .eq("id", editing.id);

      if (error) {
        toast({ title: "Erreur", description: error.message, variant: "destructive" });
      } else {
        toast({ title: "Article mis à jour ✓" });
        setEditing(null);
        resetForm();
        fetchArticles();
      }
    } else {
      const { error } = await supabase
        .from("articles")
        .insert(articleData);

      if (error) {
        toast({ title: "Erreur", description: error.message, variant: "destructive" });
      } else {
        toast({ title: "Article créé ✓" });
        setCreating(false);
        resetForm();
        fetchArticles();
      }
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Supprimer cet article ?")) return;
    const { error } = await supabase.from("articles").delete().eq("id", id);
    if (error) {
      toast({ title: "Erreur", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Article supprimé" });
      fetchArticles();
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login");
  };

  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
  };

  const showForm = creating || editing;

  const [activeTab, setActiveTab] = useState<"articles" | "tools">("articles");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border sticky top-0 bg-background/95 backdrop-blur z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Batemark" className="h-6" />
            <span className="text-sm text-muted-foreground">Admin</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={() => window.open("/blog", "_blank")}>
              <Eye className="w-4 h-4 mr-1" /> Voir le blog
            </Button>
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-1" /> Déconnexion
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="flex gap-2 mb-8">
          <button
            onClick={() => setActiveTab("articles")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === "articles" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
          >
            Articles
          </button>
          <button
            onClick={() => setActiveTab("tools")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === "tools" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
          >
            Outils IA
          </button>
        </div>

        {activeTab === "tools" ? (
          <AdminToolsManager />
        ) : !showForm ? (
          <>
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-2xl font-bold">Articles</h1>
              <Button variant="hero" onClick={() => { resetForm(); setCreating(true); }}>
                <Plus className="w-4 h-4 mr-1" /> Nouvel article
              </Button>
            </div>

            {loading ? (
              <p className="text-muted-foreground">Chargement...</p>
            ) : articles.length === 0 ? (
              <div className="card-premium text-center py-12">
                <p className="text-muted-foreground mb-4">Aucun article pour le moment</p>
                <Button variant="hero" onClick={() => { resetForm(); setCreating(true); }}>
                  Créer le premier article
                </Button>
              </div>
            ) : (
              <div className="space-y-3">
                {articles.map((article) => (
                  <div key={article.id} className="card-premium flex items-center gap-4">
                    <img
                      src={article.image_url}
                      alt={article.title}
                      className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold truncate">{article.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="px-2 py-0.5 rounded-full text-xs bg-primary/10 text-primary">{article.category}</span>
                        <span>{article.is_published ? "✅ Publié" : "⏸ Brouillon"}</span>
                        <span>/{article.slug}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Button variant="ghost" size="icon" onClick={() => loadArticle(article)}>
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => handleDelete(article.id)}>
                        <Trash2 className="w-4 h-4 text-destructive" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        ) : (
          <>
            <button
              onClick={() => { setEditing(null); setCreating(false); resetForm(); }}
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6"
            >
              <ArrowLeft className="w-4 h-4" /> Retour à la liste
            </button>

            <h1 className="text-2xl font-bold mb-8">
              {editing ? "Modifier l'article" : "Nouvel article"}
            </h1>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main content - left 2 cols */}
              <div className="lg:col-span-2 space-y-6">
                <div className="card-premium space-y-4">
                  <h2 className="font-bold text-lg">Contenu</h2>
                  <div>
                    <Label>Titre de l'article</Label>
                    <Input
                      value={title}
                      onChange={(e) => {
                        setTitle(e.target.value);
                        if (!editing) setSlug(generateSlug(e.target.value));
                      }}
                      placeholder="Comment l'IA transforme..."
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label>Slug (URL)</Label>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm text-muted-foreground">/blog/</span>
                      <Input
                        value={slug}
                        onChange={(e) => setSlug(e.target.value)}
                        placeholder="ia-hotellerie-restauration"
                      />
                    </div>
                  </div>
                  <div>
                    <Label>Catégorie</Label>
                    <Input
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      placeholder="Hôtellerie & Restauration"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label>Extrait (résumé)</Label>
                    <Textarea
                      value={excerpt}
                      onChange={(e) => setExcerpt(e.target.value)}
                      placeholder="Résumé court affiché dans les listes..."
                      className="mt-1"
                      rows={3}
                    />
                  </div>
                  <div>
                    <Label>Contenu HTML</Label>
                    <Textarea
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      placeholder="Collez votre code HTML ici..."
                      className="mt-1 font-mono text-sm"
                      rows={20}
                    />
                  </div>
                </div>
              </div>

              {/* Sidebar - right col */}
              <div className="space-y-6">
                {/* Publication */}
                <div className="card-premium space-y-4">
                  <h2 className="font-bold text-lg">Publication</h2>
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="published"
                      checked={isPublished}
                      onChange={(e) => setIsPublished(e.target.checked)}
                      className="w-4 h-4"
                    />
                    <Label htmlFor="published">Publié</Label>
                  </div>
                  <div>
                    <Label>Date de publication</Label>
                    <Input
                      type="date"
                      value={publishedAt}
                      onChange={(e) => setPublishedAt(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <Button variant="hero" className="w-full" onClick={handleSave}>
                    {editing ? "Mettre à jour" : "Créer l'article"}
                  </Button>
                </div>

                {/* Image */}
                <div className="card-premium space-y-4">
                  <h2 className="font-bold text-lg">Image de couverture</h2>
                  {imageUrl && (
                    <img src={imageUrl} alt="Preview" className="w-full h-32 object-cover rounded-lg" />
                  )}
                  <div>
                    <Label>URL de l'image</Label>
                    <Input
                      value={imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)}
                      placeholder="https://..."
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label>Ou uploader une image</Label>
                    <label className="mt-1 flex items-center gap-2 cursor-pointer text-sm text-primary hover:underline">
                      <Upload className="w-4 h-4" />
                      {uploading ? "Upload en cours..." : "Choisir un fichier"}
                      <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                    </label>
                  </div>
                </div>

                {/* SEO */}
                <div className="card-premium space-y-4">
                  <h2 className="font-bold text-lg">SEO</h2>
                  <div>
                    <Label>Meta title <span className="text-xs text-muted-foreground">({metaTitle.length}/60)</span></Label>
                    <Input
                      value={metaTitle}
                      onChange={(e) => setMetaTitle(e.target.value)}
                      placeholder="Titre SEO (différent du H1)"
                      className="mt-1"
                      maxLength={70}
                    />
                  </div>
                  <div>
                    <Label>Meta description <span className="text-xs text-muted-foreground">({metaDescription.length}/160)</span></Label>
                    <Textarea
                      value={metaDescription}
                      onChange={(e) => setMetaDescription(e.target.value)}
                      placeholder="Description pour Google..."
                      className="mt-1"
                      rows={3}
                      maxLength={170}
                    />
                  </div>
                  <div>
                    <Label>OG Title</Label>
                    <Input
                      value={ogTitle}
                      onChange={(e) => setOgTitle(e.target.value)}
                      placeholder="Titre pour réseaux sociaux"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label>OG Description</Label>
                    <Textarea
                      value={ogDescription}
                      onChange={(e) => setOgDescription(e.target.value)}
                      placeholder="Description pour réseaux sociaux"
                      className="mt-1"
                      rows={2}
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        )
        }
      </div>
    </div>
  );
};

export default AdminDashboard;
