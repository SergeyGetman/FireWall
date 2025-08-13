import { IProduct } from '../types';
import { useEffect, useState } from 'react';

export const useGetPagramsValue = (arr: IProduct[] | any) => {
  const [updateArray, setUpadateArray] = useState([]);

  useEffect(() => {
    if (arr) {
      const paramsUpdate = arr?.map((el: any) => {
        return {
          id: el.id,
          title: el.title,
          description: el.description,
          price: el.price,
          discountPercentage: el.discountPercentage,
          rating: el.rating,
          stock: el.stock,
          brand: el.brand,
          category: el.category,
          thumbnail: el.thumbnail,
          images: el.images,
        };
      });
      setUpadateArray(paramsUpdate);
    }
  }, []);

  return {
    updateArray,
  };
};
