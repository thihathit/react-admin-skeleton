import { useAxios } from "@core/hooks/adapters/useAxios"

export const useApiOne = (initialState: any) => {
    const baseURL = import.meta.env.VITE_API_1

    const { Request, setAuth, ...rest } = useAxios({
        baseURL,
        initialState,
    })

    // Sets "Authorization" header here
    // useEffect(() => {
    //     setAuth(AuthToken)
    // }, [AuthToken])

    return {
        Request,
        ...rest,
    }
}

export const useApiTwo = (initialState: any) => {
    const baseURL = import.meta.env.VITE_API_2

    const { Request, setAuth, ...rest } = useAxios({
        baseURL,
        initialState,
    })

    // Sets "Authorization" header here
    // useEffect(() => {
    //     setAuth(AuthToken)
    // }, [AuthToken])

    return {
        Request,
        ...rest,
    }
}
