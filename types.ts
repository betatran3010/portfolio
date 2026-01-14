
export interface Project {
  id: number;
  title: string;
  context: string; // e.g., "NSF Grant" or "Product Team"
  problem: string; // "How might we..."
  image: string;
  tags: string[];
  year: string;
  accentColor?: string;
  // Extended details
  description?: string;
  role?: string;
  team?: string; // New field
  duration?: string;
  tools?: string[];
  contextOverview?: string; // New field for the context box
  challenge?: string;
  solution?: string;
  impact?: string;
}

export type View = 'works' | 'about' | 'resume' | { type: 'project'; id: number };

export enum SectionId {
  WORKS = 'works',
  FOOTER = 'footer'
}
