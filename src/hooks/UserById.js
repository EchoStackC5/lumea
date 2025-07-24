import useSWR from "swr";
import { apiFetcher } from "@/api/client";
export default function useUserByID() {
    const { data } = useSWR('/users/me/profile/', apiFetcher);
    return {
        user: data,
    }

}