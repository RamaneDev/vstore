import { API_URL } from "@/constants/constants";
import { IProduct } from "@/models/Product"
import { ref } from "vue"

export const useProductList = () => {
    const products = ref<IProduct[]>([]);
    const isLoading = ref(false);
    const error = ref<string | null>(null);

    const fetchProducts = async () => {
        isLoading.value = true;
        error.value = null;
        try {
            const response = await fetch(API_URL + 'products?pageSize=6');

            if(!response.ok) {
                throw new Error('Failed to fetch products');
            }

            const data = await response.json();
            products.value = data.data;
            console.log(data);

        } catch (err) {
            error.value = err instanceof Error ? err.message : 'An error occurred';
        } finally {
            isLoading.value = false;
        }

    };

    return {
        products,
        isLoading,
        error,
        fetchProducts
    }
}