export interface Project {
  slug: string;
  title: string;
  client: string;
  logoUrl?: string;
  imageUrl: string;
  images: string[];
  description: string;
  tag: string;
  sector: string;
  challenge: string;
  approach: string;
  impact: string;
}

// Placeholder projects - will be replaced with real data
export const projects: Project[] = [
  {
    slug: "projet-exemple-1",
    title: "Génération de leads qualifiés",
    client: "Client Fitness",
    logoUrl: "/placeholder.svg",
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format",
    images: [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&auto=format",
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1200&auto=format",
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=1200&auto=format",
    ],
    description: "Campagne Meta Ads pour une salle de sport haut de gamme",
    tag: "Meta Ads",
    sector: "Fitness",
    challenge: "Attirer des prospects qualifiés pour des abonnements premium dans un marché très concurrentiel.",
    approach: "Stratégie de ciblage géolocalisé combinée à des créatives vidéo mettant en avant l'expérience unique de la salle.",
    impact: "156 leads qualifiés en 30 jours avec un coût par lead de 8,50€.",
  },
  {
    slug: "projet-exemple-2",
    title: "Lancement d'une nouvelle boutique",
    client: "Boutique Mode",
    logoUrl: "/placeholder.svg",
    imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format",
    images: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&auto=format",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&auto=format",
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=1200&auto=format",
    ],
    description: "Campagne d'ouverture pour une boutique de mode écoresponsable",
    tag: "Meta Ads",
    sector: "Mode",
    challenge: "Créer du buzz et attirer du trafic en magasin pour l'ouverture d'une nouvelle boutique.",
    approach: "Campagne événementielle avec compte à rebours, offre exclusive pour les premiers visiteurs et retargeting dynamique.",
    impact: "847 visiteurs le jour de l'ouverture, +320% vs objectif initial.",
  },
  {
    slug: "projet-exemple-3",
    title: "Acquisition clients B2B",
    client: "Agence Conseil",
    logoUrl: "/placeholder.svg",
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&auto=format",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&auto=format",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&auto=format",
    ],
    description: "Stratégie LinkedIn Ads pour générer des rendez-vous qualifiés",
    tag: "LinkedIn Ads",
    sector: "Services B2B",
    challenge: "Générer des rendez-vous avec des décideurs pour une agence de conseil en transformation digitale.",
    approach: "Campagnes de thought leadership combinées à des messages InMail personnalisés et du retargeting ciblé.",
    impact: "42 rendez-vous qualifiés en 60 jours, 3 contrats signés pour 180K€ de CA.",
  },
];
