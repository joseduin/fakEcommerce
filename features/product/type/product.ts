interface IProductRatingApi {
  rate: number;
  count: number;
}
export interface IProductApi {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: IProductRatingApi;
}

export interface IProduct extends IProductApi {}
