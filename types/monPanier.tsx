export interface ProductItemType {
  product: {
    name: string;
    price: number;
    quantity: number;
    id_product: string;
  };
  index: number;
}

export interface ProductTableType {
  products: {
    name: string;
    price: number;
    quantity: number;
    id_product: string;
  }[];
}

export interface StatePropsType {
  quantity: number;
  price: number;
}
