import React, { createContext, useState, type ReactNode } from 'react';
import { products as defaultProducts } from '../lib/data';

export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl?: string;
  description?: string;
  [key: string]: unknown;
}

export interface ContextType {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  isSearching: boolean;
  setIsSearching: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ProviderContext = createContext<ContextType | undefined>(undefined);

 const Provider = ({ children }: { children: ReactNode }) => {
   const [isSearching, setIsSearching] = useState(false);
   const [products, setProducts] = useState<Product[]>(
     defaultProducts.map((item) => ({
       ...item,
       id: String(item.id),
       name: item.title,
       price: Number(item.price),
       imageUrl: item.image,
       description: item.description,
     })),
   );

   return (
     <ProviderContext.Provider
       value={{ products, setProducts, isSearching, setIsSearching }}
     >
       {children}
     </ProviderContext.Provider>
   );
 };
export default Provider;