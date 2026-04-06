import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import {
  ArrowRight,
  CheckCircle2,
  Star,
  Calendar,
  Users,
  TrendingUp,
  RefreshCw,
  Globe,
  Zap,
} from "lucide-react";

const CAL_LINK = "https://cal.com/gaetan-batemark/audit";

// ─── Contact Form ────────────────────────────────────────────────────────────

const ContactForm = ({ onSuccess }: { onSuccess: () => void }) => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      toast({ title: "Veuillez remplir les champs obligatoires.", variant: "destructive" });
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      toast({ title: "Adresse email invalide.", variant: "destructive" });
      return;
    }
    setLoading(true);
    const { error } = await supabase.from("contact_requests").insert({
      name: name.trim().slice(0, 100),
      email: email.trim().toLowerCase().slice(0, 255),
      phone: phone.trim().slice(0, 20) || null,
      message: message.trim().slice(0, 2000) || null,
    });
    setLoading(false);
    if (error) {
      toast({ title: "Erreur lors de l'envoi", description: "Veuillez réessayer.", variant: "destructive" });
    } else {
      fetch("https://hook.eu1.make.com/knu83iltl3vh917on9d7m6fzznjltpeb", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim().toLowerCase(),
          phone: phone.trim() || null,
          message: message.trim() || null,
          submitted_at: new Date().toISOString(),
          source: window.location.href,
        }),
      }).catch(() => {});
      onSuccess();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="be-name">Nom complet *</Label>
        <Input
          id="be-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Marie Dupont"
          maxLength={100}
          required
          className="mt-1 min-h-[44px]"
        />
      </div>
      <div>
        <Label htmlFor="be-email">Email *</Label>
        <Input
          id="be-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="marie@moncentre.fr"
          maxLength={255}
          required
          className="mt-1 min-h-[44px]"
        />
      </div>
      <div>
        <Label htmlFor="be-phone">Téléphone</Label>
        <Input
          id="be-phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="06 12 34 56 78"
          maxLength={20}
          className="mt-1 min-h-[44px]"
        />
      </div>
      <div>
        <Label htmlFor="be-message">
          Commentaires <span className="text-muted-foreground text-xs">(optionnel)</span>
        </Label>
        <Textarea
          id="be-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Parlez-nous de votre centre, vos défis actuels..."
          maxLength={2000}
          rows={3}
          className="mt-1"
        />
      </div>
      <Button type="submit" variant="hero" className="w-full group min-h-[48px]" disabled={loading}>
        {loading ? "Envoi en cours..." : "Envoyer ma demande"}
        {!loading && <ArrowRight className="group-hover:translate-x-1 transition-transform" />}
      </Button>
    </form>
  );
};

// ─── Main Page ────────────────────────────────────────────────────────────────

const SecteurBienEtre = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <>
      <SEOHead
        title="Développer votre centre bien-être avec l'IA — Plus de clients, planning rempli"
        description="Système de croissance sur-mesure pour centres bien-être, spas et instituts : remplir votre planning, automatiser les relances, optimiser vos process. Résultats prouvés en France, Suisse, Belgique, Luxembourg, Espagne et USA."
        keywords="marketing centre bien-être, automatisation spa, acquisition clients bien-être, remplir planning spa, IA bien-être, consultant bien-être, croissance centre wellness, automatisation relances clients spa, marketing digital spa, fidélisation clients bien-être, franchise bien-être"
      >
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.batemark.com" },
              { "@type": "ListItem", position: 2, name: "Secteur bien-être", item: "https://www.batemark.com/secteur/bien-etre" },
            ],
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "BATEMARK — Croissance centre bien-être",
            description: "Système de croissance pour centres bien-être, spas et instituts. Acquisition clients, automatisation relances, optimisation process.",
            url: "https://www.batemark.com/secteur/bien-etre",
            areaServed: ["France", "Suisse", "Belgique", "Luxembourg", "Espagne", "USA"],
          })}
        </script>
      </SEOHead>

      <Header />

      <main id="main-content">

        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(18,31%,50%,0.07)] to-transparent pointer-events-none" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-xs font-medium tracking-widest uppercase text-[#C4956E] mb-5 border border-[#C4956E]/30 px-4 py-1.5 rounded-full">
                Secteur bien-être
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                Votre centre bien-être mérite<br />
                <span className="text-[#C4956E]">plus de clients.</span><br />
                On s'en occupe.
              </h1>
              <p className="text-base sm:text-lg text-white/65 max-w-2xl mx-auto mb-10 leading-relaxed">
                Nous construisons pour vous un <strong className="text-white/85">système de croissance autonome</strong> : remplir votre planning, automatiser vos relances et optimiser vos process — pour que vous vous concentriez uniquement sur le soin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={CAL_LINK} target="_blank" rel="noopener noreferrer">
                  <Button variant="hero" size="lg" className="group min-h-[52px] px-8">
                    Réserver mon audit gratuit
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
                <a href="#contact">
                  <Button variant="outline" size="lg" className="min-h-[52px] px-8 border-white/20 text-white hover:bg-white/5">
                    Nous écrire
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ── RÉSULTATS ────────────────────────────────────────────────────── */}
        <section className="py-16 sm:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-3">
                Des résultats qui parlent d'eux-mêmes
              </h2>
              <p className="text-sm text-white/55">
                Depuis 2017 — France, Suisse, Belgique, Luxembourg, Espagne, USA
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {[
                { icon: TrendingUp, stat: "8 → 14", label: "Centres accompagnés en moins d'un an (franchise)" },
                { icon: Calendar, stat: "×3.4", label: "Séances réservées en plus" },
                { icon: Users, stat: "×2.6", label: "Abonnements vendus" },
                { icon: Globe, stat: "6 pays", label: "France, Suisse, Belgique, Luxembourg, Espagne, USA" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass-card p-6 text-center"
                >
                  <item.icon className="w-6 h-6 text-[#C4956E] mx-auto mb-3" />
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-2">{item.stat}</div>
                  <p className="text-xs text-white/55 leading-snug">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ── TÉMOIGNAGE ───────────────────────────────────────────────────── */}
        <section className="py-16 sm:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 sm:p-10 relative"
            >
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C4956E] text-[#C4956E]" />
                ))}
              </div>
              <blockquote className="text-white/85 text-base sm:text-lg leading-relaxed mb-6 italic">
                "On était deux à gérer tout ça en courant dans tous les sens — les réservations, les relances, les posts Instagram... Depuis qu'on travaille avec Gaëtan, on a enfin l'impression d'avoir un vrai système derrière nous. Notre planning est plein trois semaines à l'avance et on dort mieux la nuit. Honnêtement, on regrette juste de ne pas l'avoir fait plus tôt."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#C4956E]/20 flex items-center justify-center text-[#C4956E] font-bold text-sm flex-shrink-0">
                  ML
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Maud & Lisa</div>
                  <div className="text-white/45 text-xs">
                    Co-gérantes —{" "}
                    <a
                      href="https://atlantica-bienetre.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#C4956E] hover:underline"
                    >
                      Atlantica Bien-être
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ── SERVICES ─────────────────────────────────────────────────────── */}
        <section className="py-16 sm:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-3">
                Notre système en 3 piliers
              </h2>
              <p className="text-sm text-white/55">
                Chaque pilier travaille en continu — même quand vous êtes en soin.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Calendar,
                  title: "Remplir votre planning",
                  description:
                    "Acquisition ciblée via les canaux qui fonctionnent pour votre zone géographique : SEO local, Meta Ads, Google My Business optimisé. Votre agenda se remplit sans que vous ayez à prospecter.",
                  points: ["SEO local & GMB", "Campagnes Meta / Google", "Système de parrainage automatisé"],
                },
                {
                  icon: RefreshCw,
                  title: "Automatiser vos relances",
                  description:
                    "Rappels de rendez-vous, relances après inactivité, messages d'anniversaire, newsletters ciblées. Chaque client reste dans votre écosystème sans effort manuel.",
                  points: ["Relances SMS & email", "Réactivation clients dormants", "Fidélisation abonnements"],
                },
                {
                  icon: Zap,
                  title: "Optimiser vos process",
                  description:
                    "Réservation en ligne fluide, gestion des avis Google, reporting automatique. Vous gagnez des heures chaque semaine et prenez de meilleures décisions plus vite.",
                  points: ["Prise de RDV automatisée", "Gestion avis & réputation", "Dashboard pilotage simple"],
                },
              ].map((pillar, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass-card p-7"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#C4956E]/10 flex items-center justify-center mb-5">
                    <pillar.icon className="w-5 h-5 text-[#C4956E]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{pillar.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed mb-5">{pillar.description}</p>
                  <ul className="space-y-2">
                    {pillar.points.map((point) => (
                      <li key={point} className="flex items-center gap-2 text-xs text-white/70">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C4956E] flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ── CONTACT FORM ─────────────────────────────────────────────────── */}
        <section id="contact" className="py-16 sm:py-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10"
            >
              <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-3">
                Parlons de votre centre
              </h2>
              <p className="text-sm text-white/55">
                Répondez en moins de 24h, jours ouvrés.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card p-7 sm:p-9"
            >
              {formSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle2 className="w-14 h-14 text-[#C4956E] mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Message envoyé !</h3>
                  <p className="text-white/60 text-sm">
                    On revient vers vous sous 24h.
                  </p>
                </div>
              ) : (
                <ContactForm onSuccess={() => setFormSubmitted(true)} />
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mt-8"
            >
              <p className="text-white/45 text-sm mb-4">Préférez un échange direct ?</p>
              <a href={CAL_LINK} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-[#C4956E]/30 text-[#C4956E] hover:bg-[#C4956E]/10 min-h-[44px]">
                  <Calendar className="w-4 h-4 mr-2" />
                  Réserver un appel de 30 min
                </Button>
              </a>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
};

export default SecteurBienEtre;
