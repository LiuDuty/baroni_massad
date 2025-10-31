export interface Course {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  level: string;
  price: number;
  imageUrl: string;
  lastUpdate: string;
  features: string[];
  instructors: string[];
  bonus?: string;
}
