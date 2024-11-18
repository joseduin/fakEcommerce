import { IProduct } from "@/features/product/type/product";

export class ProductMapper {
  static filterExitence(currentProducts: IProduct[], nextProducts: IProduct[]): IProduct[] {
    const currentProductIds = new Set(currentProducts.map(product => product.id));
    const products = [...currentProducts];

    nextProducts.forEach((product) => {
      if (!currentProductIds.has(product.id)) {
        products.push(product);
      }
    });
    
    return products;
  }
  
}
