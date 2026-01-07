-- Create testimonials table
CREATE TABLE public.testimonials (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  company TEXT NOT NULL,
  image_url TEXT NOT NULL,
  content TEXT NOT NULL,
  rating INTEGER NOT NULL DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  is_active BOOLEAN NOT NULL DEFAULT true,
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create articles table
CREATE TABLE public.articles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT NOT NULL,
  content TEXT,
  category TEXT NOT NULL,
  image_url TEXT NOT NULL,
  is_published BOOLEAN NOT NULL DEFAULT false,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;

-- Public read policies
CREATE POLICY "Anyone can view active testimonials" 
ON public.testimonials 
FOR SELECT 
USING (is_active = true);

CREATE POLICY "Anyone can view published articles" 
ON public.articles 
FOR SELECT 
USING (is_published = true);

-- Create updated_at trigger function if not exists
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create triggers
CREATE TRIGGER update_testimonials_updated_at
BEFORE UPDATE ON public.testimonials
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_articles_updated_at
BEFORE UPDATE ON public.articles
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert initial testimonials
INSERT INTO public.testimonials (name, company, image_url, content, rating, is_active, display_order) VALUES
('Marie Dupont', 'Studio Pilates Lyon', 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face', 'En 3 mois, j''ai doublé mon nombre de clients. Les leads sont vraiment qualifiés et le suivi est impeccable.', 5, true, 1),
('Thomas Martin', 'Cabinet d''ostéopathie Paris', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face', 'Enfin quelqu''un qui comprend les enjeux d''un cabinet paramédical. Résultats dès le premier mois.', 5, true, 2),
('Sophie Bernard', 'Coaching Business Bordeaux', 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face', 'La transparence des rapports est un vrai plus. Je sais exactement combien me coûte chaque client.', 5, true, 3);

-- Insert initial articles
INSERT INTO public.articles (title, slug, excerpt, content, category, image_url, is_published, published_at) VALUES
('Comment optimiser vos campagnes Meta Ads en 2024', 'optimiser-campagnes-meta-ads-2024', 'Découvrez les meilleures pratiques pour maximiser votre ROI sur Facebook et Instagram.', NULL, 'Meta Ads', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop', true, now()),
('Les erreurs qui plombent vos publicités Facebook', 'erreurs-publicites-facebook', 'Évitez ces 5 erreurs courantes qui font perdre de l''argent à 90% des entreprises.', NULL, 'Stratégie', 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&h=400&fit=crop', true, now()),
('Pourquoi les leads locaux convertissent mieux', 'leads-locaux-convertissent-mieux', 'Une étude de cas sur l''efficacité du ciblage géographique pour les entreprises de services.', NULL, 'Études', 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop', true, now());