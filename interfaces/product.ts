export interface Iproduct {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
  rating: Irating;
}

interface Irating {
  rate: number;
  count: number;
}
