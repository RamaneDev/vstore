import { API_URL } from "@/constants/constants";
import { IBrand } from "@/models/Brand";
import { ref } from "vue";

const useBrands = () => {
    const  brands = ref<IBrand[]>([]);
    const  isLoading = ref(false);
    const  error = ref<string | null>(null);



      const fetchBrands = async () => {
        isLoading.value = true;
        error.value = null;

        try {
          const response = await fetch(API_URL + 'products/brands');
          if (!response.ok) {
            throw new Error('Failed to fetch brands');
          }
          const data = await response.json();
          brands.value = data;
        } catch (err) {
          error.value = err instanceof Error ? err.message : 'An error occurred';
        } finally {
          isLoading.value = false;
        }
      };

    return {fetchBrands, brands, isLoading, error };
  };

  export default useBrands;