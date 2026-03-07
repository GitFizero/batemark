-- Allow admin to see all articles (including drafts)
CREATE POLICY "Admins can select all articles"
ON public.articles
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));