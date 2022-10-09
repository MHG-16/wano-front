export interface ProductItemType {
  product: { name: string; price: number; quantity: number };
  index: number;
}

export interface ProductTableType {
  products: { name: string; price: number; quantity: number }[];
}

export interface StatePropsType {
  quantity: number;
  price: number;
}
