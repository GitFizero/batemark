import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import logo from "@/assets/logo.svg";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isSignup) {
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        toast({ title: "Compte créé", description: "Connecte-toi maintenant." });
        setIsSignup(false);
      } else {
        const { data, error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;

        // Check admin role
        const { data: roles, error: roleError } = await supabase
          .from("user_roles")
          .select("role")
          .eq("user_id", data.user.id)
          .eq("role", "admin");

        if (roleError || !roles || roles.length === 0) {
          await supabase.auth.signOut();
          toast({ title: "Accès refusé", description: "Vous n'avez pas les droits admin.", variant: "destructive" });
          return;
        }

        navigate("/admin");
      }
    } catch (err: any) {
      toast({ title: "Erreur", description: err.message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="card-premium max-w-md w-full">
        <div className="flex justify-center mb-8">
          <img src={logo} alt="Batemark" className="h-8" />
        </div>
        <h1 className="text-2xl font-bold text-center mb-6">
          {isSignup ? "Créer un compte" : "Admin — Connexion"}
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="password">Mot de passe</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              className="mt-1"
            />
          </div>
          <Button type="submit" variant="hero" className="w-full" disabled={loading}>
            {loading ? "Chargement..." : isSignup ? "S'inscrire" : "Se connecter"}
          </Button>
        </form>
        <button
          onClick={() => setIsSignup(!isSignup)}
          className="w-full text-center text-sm text-muted-foreground mt-4 hover:text-foreground transition-colors"
        >
          {isSignup ? "Déjà un compte ? Se connecter" : "Pas encore de compte ? S'inscrire"}
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;
