export type Product = {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  imageUrl: string;
  basePrice: number;
  discountPercentage: number;
  halloweenPromotional: boolean;
};
