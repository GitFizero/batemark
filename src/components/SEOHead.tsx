import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  articlePublishedTime?: string;
  articleModifiedTime?: string;
  noindex?: boolean;
  children?: React.ReactNode;
}

const SITE_NAME = "BATEMARK";
const SITE_URL = "https://batemark.fr";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;
const AUTHOR = "Gaëtan Fizero";

export const SEOHead = ({
  title,
  description,
  keywords,
  ogImage,
  ogType = "website",
  articlePublishedTime,
  articleModifiedTime,
  noindex = false,
  children,
}: SEOHeadProps) => {
  const location = useLocation();
  const canonicalUrl = `${SITE_URL}${location.pathname}`;
  const fullTitle = `${title} | ${SITE_NAME}`;
  const image = ogImage || DEFAULT_OG_IMAGE;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta
        name="robots"
        content={
          noindex
            ? "noindex, nofollow"
            : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        }
      />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="author" content={AUTHOR} />
      <meta name="theme-color" content="#B4836D" />
      <meta name="ai-content-declaration" content="human-assisted" />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="fr_FR" />

      {articlePublishedTime && (
        <meta property="article:published_time" content={articlePublishedTime} />
      )}
      {articleModifiedTime && (
        <meta property="article:modified_time" content={articleModifiedTime} />
      )}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Social profiles */}
      <link rel="me" href="https://www.linkedin.com/in/gaetanfizero/" />

      {children}
    </Helmet>
  );
};
