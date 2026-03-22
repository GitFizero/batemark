import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface ContactFormDialogProps {
  trigger: React.ReactNode;
}

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
      // Send webhook to Make.com (fire-and-forget)
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
        <Label htmlFor="contact-name">Nom complet *</Label>
        <Input
          id="contact-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Jean Dupont"
          maxLength={100}
          required
          className="mt-1 min-h-[44px]"
        />
      </div>
      <div>
        <Label htmlFor="contact-email">Email *</Label>
        <Input
          id="contact-email"
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
        <Label htmlFor="contact-phone">
          Téléphone <span className="text-muted-foreground text-xs">(optionnel)</span>
        </Label>
        <Input
          id="contact-phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="06 12 34 56 78"
          maxLength={20}
          className="mt-1 min-h-[44px]"
        />
      </div>
      <div>
        <Label htmlFor="contact-message">
          Message <span className="text-muted-foreground text-xs">(optionnel)</span>
        </Label>
        <Textarea
          id="contact-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Décrivez brièvement votre projet..."
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

const SuccessContent = ({ onClose }: { onClose: () => void }) => (
  <div className="text-center py-8">
    <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-4" />
    <h3 className="text-2xl font-bold mb-2">Merci !</h3>
    <p className="text-muted-foreground">
      Votre demande a bien été envoyée. Nous vous recontactons sous 24h.
    </p>
    <Button variant="hero" className="mt-6 min-h-[48px]" onClick={onClose}>
      Fermer
    </Button>
  </div>
);

export const ContactFormDialog = ({ trigger }: ContactFormDialogProps) => {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const isMobile = useIsMobile();

  const handleOpenChange = (v: boolean) => {
    setOpen(v);
    if (!v) {
      setTimeout(() => setSubmitted(false), 300);
    }
  };

  const headerContent = (
    <>
      <div className="text-xl font-bold">Demander votre audit gratuit</div>
      <p className="text-sm text-muted-foreground mt-1">
        Remplissez ce formulaire et nous vous recontactons sous 24h.
      </p>
    </>
  );

  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={handleOpenChange}>
        <DrawerTrigger asChild>{trigger}</DrawerTrigger>
        <DrawerContent className="max-h-[90vh]">
          <DrawerHeader className="text-left">
            <DrawerTitle>Demander votre audit gratuit</DrawerTitle>
            <p className="text-sm text-muted-foreground mt-1">
              Remplissez ce formulaire et nous vous recontactons sous 24h.
            </p>
          </DrawerHeader>
          <div className="px-4 pb-8 overflow-y-auto">
            {submitted ? (
              <SuccessContent onClose={() => handleOpenChange(false)} />
            ) : (
              <ContactForm onSuccess={() => setSubmitted(true)} />
            )}
          </div>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        {submitted ? (
          <SuccessContent onClose={() => handleOpenChange(false)} />
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl font-bold">
                Demander votre audit gratuit
              </DialogTitle>
              <p className="text-sm text-muted-foreground mt-1">
                Remplissez ce formulaire et nous vous recontactons sous 24h.
              </p>
            </DialogHeader>
            <div className="mt-4">
              <ContactForm onSuccess={() => setSubmitted(true)} />
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};
