
export interface Resource {
  id: string;
  slug: string;
  name: string;
  logo: string;
  rating: number;
  externalUrl: string;
  shortDescription: string;
  category: string;
  detailedReview: ReviewContent;
  publishDate: string;
}

export interface ReviewContent {
  intro: string;
  fullDescription: string;
  advantages: string[];
  targetAudience: string;
  summary: string;
  parameters: {
    label: string;
    value: string;
  }[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
}
