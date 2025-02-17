import { API_URL } from "@/constants/constants";
import { IProductType } from "@/models/ProductType";
import { ref } from "vue";

const useProductTypes = () => {
    const  types = ref<IProductType[]>([]);
    const  isLoading = ref(false);
    const  error = ref<string | null>(null);



      const fetchTypes = async () => {
        isLoading.value = true;
        error.value = null;

        try {
          const response = await fetch(API_URL + 'products/types');
          if (!response.ok) {
            throw new Error('Failed to fetch types');
          }
          const data = await response.json();
          types.value = data;
        } catch (err) {
          error.value = err instanceof Error ? err.message : 'An error occurred';
        } finally {
          isLoading.value = false;
        }
      };

    return {fetchTypes, types, isLoading, error };
  };

  export default useProductTypes;