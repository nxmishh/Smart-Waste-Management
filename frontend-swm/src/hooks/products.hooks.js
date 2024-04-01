import allProductsData from '../api/requests'
import { useQuery } from '@tanstack/react-query';

export default function useGetProducts() {
    const { isLoading, isError, data, error } = useQuery({ queryKey: ['products'], queryFn: allProductsData() })
    if (isError) {
        console.log(error)
    }

    return { isLoading, data }
}

