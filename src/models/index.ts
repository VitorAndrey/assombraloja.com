export type Product = {
  _id: string;
  name: string;
  slug: {
    _type: string;
    current: string;
  };
  description?: string;
  image: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
    hotspot: {
      _type: string;
      x: number;
      y: number;
      height: number;
      width: number;
    };
  };
  basePrice: number;
  discountPercentage: number;
  halloweenPromotional: boolean;
};
