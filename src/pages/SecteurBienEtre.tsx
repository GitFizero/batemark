import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Calendar, Users, TrendingUp, Star, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { AmbientOrb } from "@/components/ui/AmbientGlow";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const CAL_LINK = "https://cal.com/gaetan-batemark/audit";

const FADE_UP = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const stats = [
  {
    icon: TrendingUp,
    value: "8 → 14",
    label: "centres en moins d'un an",
    sub: "Franchise minceur accompagnée",
  },
  {
    icon: Calendar,
    value: "×3,4",
    label: "séances réalisées",
    sub: "Plannings remplis durablement",
  },
  {
    icon: Users,
    value: "×2,6",
    label: "abonnements souscrits",
    sub: "Fidélisation & réactivation client",
  },
];

const countries = ["France", "Suisse", "Belgique", "Luxembourg", "Espagne", "États-Unis"];

const services = [
  {
    number: "01",
    title: "On remplit votre planning",
    description:
      "Acquisition ciblée de nouveaux clients : publicités locales, référencement, tunnels de prise de rendez-vous. Votre agenda se remplit sans que vous leviez le petit doigt.",
  },
  {
    number: "02",
    title: "On automatise vos relances",
    description:
      "Rappels de RDV, relances des prospects inactifs, messages post-séance, offres de réabonnement — tout part au bon moment, sans aucune intervention de votre part.",
  },
  {
    number: "03",
    title: "On optimise vos process",
    description:
      "Moins de tâches répétitives, plus de temps pour vos clients. On identifie ce qui freine votre équipe et on met en place des systèmes qui tournent seuls.",
  },
];

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
      onSuccess();
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
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="bienetre-name">Nom complet *</Label>
        <Input
          id="bienetre-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Jean Dupont"
          maxLength={100}
          required
          className="mt-1 min-h-[44px]"
        />
      </div>
      <div>
        <Label htmlFor="bienetre-email">Email *</Label>
        <Input
          id="bienetre-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="jean@exemple.com"
          maxLength={255}
          required
          className="mt-1 min-h-[44px]"
        />
      </div>
      <div>
        <Label htmlFor="bienetre-phone">
          Téléphone <span className="text-muted-foreground text-xs">(optionnel)</span>
        </Label>
        <Input
          id="bienetre-phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="06 12 34 56 78"
          maxLength={20}
          className="mt-1 min-h-[44px]"
        />
      </div>
      <div>
        <Label htmlFor="bienetre-message">
          Commentaires <span className="text-muted-foreground text-xs">(optionnel)</span>
        </Label>
        <Textarea
          id="bienetre-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Parlez-nous de votre centre, vos objectifs, vos défis actuels..."
          maxLength={2000}
          rows={3}
          className="mt-1"
        />
      </div>
      <Button
        type="submit"
        className="w-full group min-h-[48px] bg-[#c4956e] text-white hover:bg-[#c4956e]/90 rounded-full"
        disabled={loading}
      >
        {loading ? "Envoi en cours..." : "Envoyer ma demande"}
        {!loading && <ArrowRight className="group-hover:translate-x-1 transition-transform" />}
      </Button>
    </form>
  );
};

const SecteurBienEtre = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <SEOHead
        title="Développez votre centre bien-être"
        description="BATEMARK accompagne les centres bien-être, spas et franchises fitness pour remplir leur planning, automatiser leurs relances et booster leurs abonnements. Résultats prouvés depuis 2017 en France, Suisse, Belgique et au-delà."
        keywords="marketing centre bien-être, acquisition clients spa, automatisation bien-être, croissance centre minceur, franchise fitness marketing"
      />

      <Header />

      <main id="main-content">
        {/* ── HERO ── */}
        <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden px-4">
          <AmbientOrb color="copper" size="lg" position="center" intensity={0.08} />
          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-white/60 text-xs tracking-[0.25em] uppercase font-medium mb-6"
            >
              Secteur Bien-être & Fitness
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-[2.75rem] font-semibold text-white leading-[1.15] mb-5"
            >
              Votre centre bien-être mérite{" "}
              <span className="text-[#c4956e]">plus de clients.</span>
              <br />
              On s'en occupe.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white/55 text-sm sm:text-base leading-relaxed mb-10 max-w-lg mx-auto"
            >
              Un système complet d'acquisition, d'automatisation et d'optimisation —
              conçu pour les centres bien-être qui veulent croître sans courir dans tous les sens.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 justify-center items-center"
            >
              <Button
                size="lg"
                className="bg-[#c4956e] text-white hover:bg-[#c4956e]/90 rounded-full px-8 py-3 text-sm font-medium group"
                asChild
              >
                <a href={CAL_LINK} target="_blank" rel="noopener noreferrer">
                  Réserver mon audit gratuit
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <p className="text-[11px] text-white/35">Gratuit · Sans engagement · 30 min</p>
            </motion.div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ── RÉSULTATS ── */}
        <section className="py-16 sm:py-20 md:py-24 px-4">
          <div className="container-custom">
            <motion.div {...FADE_UP} className="text-center mb-14">
              <p className="text-[#c4956e] text-xs tracking-[0.2em] uppercase font-medium mb-3">
                Résultats prouvés
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4">
                Ce que nos clients ont obtenu
              </h2>
              <p className="text-sm text-white/50 max-w-md mx-auto">
                Depuis 2017, nous accompagnons des grandes franchises bien-être et fitness
                sur 6 pays.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-14">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.value}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="glass-card p-6 text-center"
                >
                  <div className="w-10 h-10 rounded-full bg-[#c4956e]/12 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-5 h-5 text-[#c4956e]" />
                  </div>
                  <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-sm font-medium text-white/80 mb-1">{stat.label}</p>
                  <p className="text-[11px] text-white/40">{stat.sub}</p>
                </motion.div>
              ))}
            </div>

            {/* Présence internationale */}
            <motion.div {...FADE_UP} className="glass-card p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#c4956e]/12 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#c4956e]" />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-white/80 mb-2">
                    Expérience internationale — centres accompagnés dans 6 pays
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {countries.map((country) => (
                      <span
                        key={country}
                        className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 border border-white/8 text-white/55"
                      >
                        {country}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ── TÉMOIGNAGE ── */}
        <section className="py-16 sm:py-20 md:py-24 px-4 relative overflow-hidden">
          <AmbientOrb color="copper" size="md" position="top-right" intensity={0.06} />
          <div className="container-custom relative z-10">
            <motion.div {...FADE_UP} className="text-center mb-12">
              <p className="text-[#c4956e] text-xs tracking-[0.2em] uppercase font-medium mb-3">
                Client bien-être
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white">
                Ce qu'ils en disent
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card p-8 sm:p-10 max-w-2xl mx-auto"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-6">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-[#c4956e] text-[#c4956e]" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-white/75 text-base sm:text-lg leading-relaxed mb-8 italic">
                "Gaëtan a compris notre métier en 2 jours. En 3 mois, notre planning était plein
                et nos relances se faisaient toutes seules. Les abonnements ont explosé, et l'équipe
                respire enfin. On ne revient pas en arrière."
              </blockquote>

              {/* Author + logo */}
              <div className="flex items-center gap-4 border-t border-white/8 pt-6">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-[#c4956e]/15 flex items-center justify-center text-[#c4956e] text-sm font-bold border-2 border-background z-10">
                    M
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#c4956e]/15 flex items-center justify-center text-[#c4956e] text-sm font-bold border-2 border-background">
                    L
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-white/90">Maud & Lisa</p>
                  <p className="text-[11px] text-white/45">Co-gérantes</p>
                </div>
                <a
                  href="https://www.atlantica-bienetre.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0"
                  aria-label="Atlantica Bien-être"
                >
                  <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-[#c4956e]/40 transition-colors">
                    <p className="text-[11px] font-semibold text-white/60 tracking-wide uppercase">
                      Atlantica
                    </p>
                    <p className="text-[10px] text-[#c4956e] tracking-widest uppercase">
                      Bien-être
                    </p>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ── SERVICES ── */}
        <section className="py-16 sm:py-20 md:py-24 px-4">
          <div className="container-custom">
            <motion.div {...FADE_UP} className="text-center mb-14">
              <p className="text-[#c4956e] text-xs tracking-[0.2em] uppercase font-medium mb-3">
                Notre méthode
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4">
                Ce qu'on fait concrètement
              </h2>
              <p className="text-sm text-white/50 max-w-sm mx-auto">
                Trois piliers complémentaires pour une croissance durable.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {services.map((service, i) => (
                <motion.div
                  key={service.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className="glass-card p-7 flex flex-col gap-4"
                >
                  <span className="text-[11px] font-semibold text-[#c4956e]/70 tracking-[0.2em] uppercase">
                    {service.number}
                  </span>
                  <h3 className="text-lg font-semibold text-white leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-[13px] text-white/55 leading-relaxed flex-1">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ── FORMULAIRE ── */}
        <section className="py-16 sm:py-20 md:py-24 px-4 relative overflow-hidden">
          <AmbientOrb color="copper" size="md" position="bottom-left" intensity={0.06} />
          <div className="container-custom relative z-10">
            <div className="max-w-xl mx-auto">
              <motion.div {...FADE_UP} className="text-center mb-10">
                <p className="text-[#c4956e] text-xs tracking-[0.2em] uppercase font-medium mb-3">
                  Parlons de votre projet
                </p>
                <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-3">
                  Démarrons ensemble
                </h2>
                <p className="text-sm text-white/50">
                  Remplissez ce formulaire ou réservez directement un créneau — on vous répond sous 24h.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="glass-card p-7 sm:p-9"
              >
                {submitted ? (
                  <div className="text-center py-8">
                    <CheckCircle2 className="w-14 h-14 text-[#c4956e] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Merci !</h3>
                    <p className="text-sm text-white/55">
                      Votre demande a bien été envoyée. On vous recontacte sous 24h.
                    </p>
                    <Button
                      className="mt-6 min-h-[44px] bg-[#c4956e] text-white hover:bg-[#c4956e]/90 rounded-full px-6"
                      asChild
                    >
                      <a href={CAL_LINK} target="_blank" rel="noopener noreferrer">
                        Réserver un créneau aussi
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </a>
                    </Button>
                  </div>
                ) : (
                  <ContactForm onSuccess={() => setSubmitted(true)} />
                )}
              </motion.div>

              {!submitted && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-center mt-6"
                >
                  <p className="text-[12px] text-white/35 mb-3">Ou réservez directement</p>
                  <Button
                    variant="outline"
                    className="rounded-full border-white/15 text-white/60 hover:text-white hover:border-white/30 bg-transparent text-sm"
                    asChild
                  >
                    <a href={CAL_LINK} target="_blank" rel="noopener noreferrer">
                      <Calendar className="w-4 h-4 mr-2" />
                      Audit gratuit de 30 min sur Cal.com
                    </a>
                  </Button>
                </motion.div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default SecteurBienEtre;
