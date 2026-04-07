export interface Shop {
  id: string;
  name: string;
  priceLevel: number;
  distance: string;
  distanceMeters: number;
  rating: number;
  ratingDistribution: Record<string, number>;
  certifications: string[];
  address: string;
  coordinates: { lat: number; lng: number };
  brands: string[];
  reviews: Review[];
  clothes: string[];
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
}

export interface Brand {
  id: string;
  name: string;
  certifications: string[];
}

export interface FilterState {
  searchQuery: string;
  clothes: string[];
  certifications: string[];
  maxPrice: number;
  minRating: number;
}
