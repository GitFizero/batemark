import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Plus, Pencil, Trash2, ArrowLeft, Upload } from "lucide-react";

interface AiTool {
  id: string;
  name: string;
  description: string;
  category: string;
  affiliate_url: string;
  logo_url: string | null;
  is_active: boolean;
  display_order: number;
}

export const AdminToolsManager = () => {
  const [tools, setTools] = useState<AiTool[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<AiTool | null>(null);
  const [creating, setCreating] = useState(false);

  // Form state
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [affiliateUrl, setAffiliateUrl] = useState("");
  const [logoUrl, setLogoUrl] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [displayOrder, setDisplayOrder] = useState(0);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    fetchTools();
  }, []);

  const fetchTools = async () => {
    const { data } = await supabase
      .from("ai_tools" as any)
      .select("*")
      .order("display_order", { ascending: true });
    if (data) setTools(data as any);
    setLoading(false);
  };

  const resetForm = () => {
    setName("");
    setDescription("");
    setCategory("");
    setAffiliateUrl("");
    setLogoUrl("");
    setIsActive(true);
    setDisplayOrder(0);
  };

  const loadTool = (tool: AiTool) => {
    setName(tool.name);
    setDescription(tool.description);
    setCategory(tool.category);
    setAffiliateUrl(tool.affiliate_url);
    setLogoUrl(tool.logo_url || "");
    setIsActive(tool.is_active);
    setDisplayOrder(tool.display_order);
    setEditing(tool);
    setCreating(false);
  };

  const handleLogoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const ext = file.name.split(".").pop();
    const fileName = `tool-${Date.now()}.${ext}`;
    const { error } = await supabase.storage.from("article-images").upload(fileName, file);
    if (error) {
      toast({ title: "Erreur upload", description: error.message, variant: "destructive" });
    } else {
      const { data: urlData } = supabase.storage.from("article-images").getPublicUrl(fileName);
      setLogoUrl(urlData.publicUrl);
      toast({ title: "Logo uploadé" });
    }
    setUploading(false);
  };

  const handleSave = async () => {
    if (!name || !description || !category || !affiliateUrl) {
      toast({ title: "Champs requis manquants", variant: "destructive" });
      return;
    }

    const toolData = {
      name,
      description,
      category,
      affiliate_url: affiliateUrl,
      logo_url: logoUrl || null,
      is_active: isActive,
      display_order: displayOrder,
    };

    if (editing) {
      const { error } = await (supabase.from("ai_tools" as any) as any)
        .update(toolData)
        .eq("id", editing.id);
      if (error) {
        toast({ title: "Erreur", description: error.message, variant: "destructive" });
      } else {
        toast({ title: "Outil mis à jour ✓" });
        setEditing(null);
        resetForm();
        fetchTools();
      }
    } else {
      const { error } = await (supabase.from("ai_tools" as any) as any).insert(toolData);
      if (error) {
        toast({ title: "Erreur", description: error.message, variant: "destructive" });
      } else {
        toast({ title: "Outil créé ✓" });
        setCreating(false);
        resetForm();
        fetchTools();
      }
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Supprimer cet outil ?")) return;
    const { error } = await (supabase.from("ai_tools" as any) as any).delete().eq("id", id);
    if (error) {
      toast({ title: "Erreur", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Outil supprimé" });
      fetchTools();
    }
  };

  const showForm = creating || editing;

  if (showForm) {
    return (
      <div>
        <button
          onClick={() => { setEditing(null); setCreating(false); resetForm(); }}
          className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> Retour à la liste
        </button>

        <h2 className="text-xl font-bold mb-6">
          {editing ? "Modifier l'outil" : "Nouvel outil IA"}
        </h2>

        <div className="space-y-4 max-w-xl">
          <div>
            <Label>Nom de l'outil *</Label>
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Meetlane" className="mt-1" />
          </div>
          <div>
            <Label>Catégorie *</Label>
            <Input value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Prospection & Acquisition" className="mt-1" />
          </div>
          <div>
            <Label>Description *</Label>
            <Textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description de l'outil..." className="mt-1" rows={4} />
          </div>
          <div>
            <Label>Lien d'affiliation *</Label>
            <Input value={affiliateUrl} onChange={(e) => setAffiliateUrl(e.target.value)} placeholder="https://..." className="mt-1" />
          </div>
          <div>
            <Label>URL du logo</Label>
            <Input value={logoUrl} onChange={(e) => setLogoUrl(e.target.value)} placeholder="https://..." className="mt-1" />
            <label className="mt-2 flex items-center gap-2 cursor-pointer text-sm text-primary hover:underline">
              <Upload className="w-4 h-4" />
              {uploading ? "Upload en cours..." : "Ou uploader un logo"}
              <input type="file" accept="image/*" onChange={handleLogoUpload} className="hidden" />
            </label>
          </div>
          <div>
            <Label>Ordre d'affichage</Label>
            <Input type="number" value={displayOrder} onChange={(e) => setDisplayOrder(Number(e.target.value))} className="mt-1" />
          </div>
          <div className="flex items-center gap-3">
            <input type="checkbox" id="tool-active" checked={isActive} onChange={(e) => setIsActive(e.target.checked)} className="w-4 h-4" />
            <Label htmlFor="tool-active">Actif (visible sur le site)</Label>
          </div>
          <Button variant="hero" className="w-full" onClick={handleSave}>
            {editing ? "Mettre à jour" : "Créer l'outil"}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-bold">Outils IA</h2>
        <Button variant="hero" onClick={() => { resetForm(); setCreating(true); }}>
          <Plus className="w-4 h-4 mr-1" /> Nouvel outil
        </Button>
      </div>

      {loading ? (
        <p className="text-muted-foreground">Chargement...</p>
      ) : tools.length === 0 ? (
        <div className="card-premium text-center py-12">
          <p className="text-muted-foreground mb-4">Aucun outil pour le moment</p>
          <Button variant="hero" onClick={() => { resetForm(); setCreating(true); }}>
            Ajouter un outil
          </Button>
        </div>
      ) : (
        <div className="space-y-3">
          {tools.map((tool) => (
            <div key={tool.id} className="card-premium flex items-center gap-4">
              {tool.logo_url ? (
                <img src={tool.logo_url} alt={tool.name} className="w-10 h-10 rounded-lg object-contain flex-shrink-0" />
              ) : (
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary font-bold">
                  {tool.name[0]}
                </div>
              )}
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold truncate">{tool.name}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="px-2 py-0.5 rounded-full text-xs bg-primary/10 text-primary">{tool.category}</span>
                  <span>{tool.is_active ? "✅ Actif" : "⏸ Inactif"}</span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Button variant="ghost" size="icon" onClick={() => loadTool(tool)}>
                  <Pencil className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" onClick={() => handleDelete(tool.id)}>
                  <Trash2 className="w-4 h-4 text-destructive" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
