export interface BusinessAddress {
  street: string;
  landmark?: string;
  locality?: string;
  city: string;
  state?: string;
  pincode?: string;
  fullFormatted: string;
}

export interface BusinessInfo {
  name: string;
  tagline: string;
  description: string;
  address: BusinessAddress;
  phone: string | null;
  whatsapp: string | null;
  email: string | null;
  googleMapsUrl: string | null;
  openingHours: {
    days?: string;
    hours?: string;
    note?: string;
  } | null;
  socialLinks: {
    instagram?: string | null;
    facebook?: string | null;
    youtube?: string | null;
  } | null;
}

export interface ShowroomZone {
  id: string;
  title: string;
  categoryTag: string;
  shortDescription: string;
  detailedDescription: string;
  image: string;
  visibleFeatures: string[];
}

export interface ProductCategory {
  id: string;
  name: string;
  hindiName?: string;
  description: string;
  coverImage: string;
}

export interface ShowroomVisualItem {
  id: string;
  title: string;
  categoryId: string;
  categoryName: string;
  image: string;
  visibleHighlights: string[];
  inquiryNote: string;
}

export interface MaterialCareInfo {
  id: string;
  materialName: string;
  subtitle: string;
  characteristics: string[];
  traditionalUsage: string[];
  careAndMaintenance: string[];
}
