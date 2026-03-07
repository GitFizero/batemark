CREATE TABLE public.ai_tools (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  category text NOT NULL DEFAULT 'Général',
  affiliate_url text NOT NULL,
  logo_url text,
  is_active boolean NOT NULL DEFAULT true,
  display_order integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.ai_tools ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active tools"
  ON public.ai_tools
  FOR SELECT
  TO anon, authenticated
  USING (is_active = true);

CREATE POLICY "Admins can select all tools"
  ON public.ai_tools
  FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can insert tools"
  ON public.ai_tools
  FOR INSERT
  TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update tools"
  ON public.ai_tools
  FOR UPDATE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete tools"
  ON public.ai_tools
  FOR DELETE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE TRIGGER update_ai_tools_updated_at
  BEFORE UPDATE ON public.ai_tools
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();