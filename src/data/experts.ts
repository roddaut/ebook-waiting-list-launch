
import { ExpertData } from "@/types/expert";

export const expertsData: ExpertData[] = [
  {
    id: "matt-giaro",
    name: "Matt Giaro",
    title: "Content Creator & Template Expert",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    bio: "Matt Giaro is a seasoned content creator who has mastered the art of using templates to enhance creativity and productivity. With years of experience in digital marketing and content strategy, Matt has helped thousands of creators overcome writer's block and produce consistent, high-quality content.",
    expertise: [
      "Template-based content creation",
      "Creative productivity systems",
      "Content strategy and planning",
      "Writer's block solutions",
      "Digital marketing frameworks"
    ],
    contribution: "Why working within templates increases creativity—and helps you write faster and better.",
    socialLinks: {
      website: "https://mattgiaro.com",
      twitter: "https://twitter.com/mattgiaro",
      linkedin: "https://linkedin.com/in/mattgiaro"
    },
    slug: "matt-giaro"
  },
  {
    id: "tom-kueglar",
    name: "Tom Kueglar",
    title: "AI Training Specialist & Content Strategist",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    bio: "Tom Kueglar is an expert in AI-powered content creation and personal voice training. He specializes in helping creators and businesses leverage artificial intelligence while maintaining their unique voice and expertise. Tom has developed innovative methods for training AI systems to think and write like their human counterparts.",
    expertise: [
      "AI voice training and customization",
      "Content scaling with AI",
      "Personal brand voice development",
      "AI prompt engineering",
      "Automated content systems"
    ],
    contribution: "The training method that makes AI think exactly like you do—scaling your expertise without losing your voice.",
    socialLinks: {
      website: "https://tomkuegler.com",
      twitter: "https://twitter.com/tomkuegler",
      linkedin: "https://linkedin.com/in/tomkuegler"
    },
    slug: "tom-kuegler"
  },
  {
    id: "sinem-gunel",
    name: "Sinem Günel",
    title: "High-Ticket Coaching Expert & Creator Economy Specialist",
    photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    bio: "Sinem Günel is a master of transforming small audiences into high-value coaching businesses. She has built a thriving coaching practice by focusing on high-ticket offerings and deep audience connection rather than massive follower counts. Sinem's approach proves that quality trumps quantity in the creator economy.",
    expertise: [
      "High-ticket coaching program development",
      "Small audience monetization",
      "Premium service positioning",
      "Client acquisition strategies",
      "Creator economy optimization"
    ],
    contribution: "How creators with tiny audiences use high-ticket coaching to generate five-figure months.",
    socialLinks: {
      website: "https://sinemgunel.com",
      twitter: "https://twitter.com/sinemgunel",
      linkedin: "https://linkedin.com/in/sinemgunel"
    },
    slug: "sinem-gunel"
  }
];

export const getExpertBySlug = (slug: string): ExpertData | undefined => {
  return expertsData.find(expert => expert.slug === slug);
};
