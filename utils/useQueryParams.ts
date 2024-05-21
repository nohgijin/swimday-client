import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const useQueryParams = <T>() => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const urlSearchParams = new URLSearchParams(searchParams?.toString());

    function setQueryParams(params: Partial<T>) {
        Object.entries(params).forEach(([key, value]) => {
            if (value === undefined || value === null) {
                urlSearchParams.delete(key);
            } else {
                urlSearchParams.set(key, String(value));
            }
        });

        const search = urlSearchParams.toString();
        const query = search ? `?${search}` : "";
        router.replace(`${pathname}${query}`);
    }

    return { queryParams: searchParams, setQueryParams };
};
