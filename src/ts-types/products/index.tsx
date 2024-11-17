import { ReactNode } from "react";

export interface ProductAttributesObjectType {
  data_type?: string;
  label?: string;
  name?: string;
  description?: string;
  image?: string;
  icon?: string | ReactNode | JSX.Element;
}
export interface ProductVariationsObjectType {
  data_type?: string;
  label?: string;
  name?: string;
  description?: string;
  image?: string;
  icon?: string | ReactNode | JSX.Element;
}
