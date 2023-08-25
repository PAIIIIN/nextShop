interface IProducts {
  id: number;
  title: string;
  price: string;
  descriptiom: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
export type { IProducts };
