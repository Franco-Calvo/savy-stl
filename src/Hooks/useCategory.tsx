//@ts-nocheck
import { useState, useEffect } from "react";
import axios from "axios";

interface Category {
  id: number;
  name: string;
}

interface UseCategoryResult {
  categories: Category[];
  loading: boolean;
  error: string | null;
}

const useCategory = (): UseCategoryResult => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [categoriesLoaded, setCategoriesLoaded] = useState(false);

  useEffect(() => {
    if (!categoriesLoaded) {
      setLoading(true);

      const fetchCategories = async () => {
        try {
          const response = await axios.get<Category[]>(
            "http://localhost:8000/category/"
          );
          setCategories(response.data);
          setLoading(false);
          setCategoriesLoaded(true);
        } catch (error) {
          setError(error.message);
          setLoading(false);
        }
      };

      fetchCategories();
    }
  }, [categoriesLoaded]);

  return { categories, loading, error };
};

export default useCategory;
