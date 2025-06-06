export type TypeOptionProduct = 'color' | 'text';
export type ShapeOptionProduct = 'circle' | 'square';

export interface OptionProduct {
  title: string;
  shape: ShapeOptionProduct;
  radius: number;
  type: TypeOptionProduct;
  values: string[];
}
