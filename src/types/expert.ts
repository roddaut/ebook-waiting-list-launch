
export interface ExpertData {
  id: string;
  name: string;
  title: string;
  photo: string;
  bio: string;
  expertise: string[];
  contribution: string;
  socialLinks: {
    website?: string;
    twitter?: string;
    linkedin?: string;
  };
  slug: string;
}
