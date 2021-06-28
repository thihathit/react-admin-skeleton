import { useApiTwo } from "@app/hooks/services/useApi"

const prefix = "api/v1"

export const getBpi = () => {
    const initialState = {
        loading: false,
        data: null,
        error: null,
    }

    const { Request, state, setState, successResolver, isCancel } =
        useApiTwo(initialState)

    const ajax = async () => {
        // On Request state
        setState((old: any) => ({
            ...old,
            loading: true,
            error: initialState.error,
        }))

        // Api request
        const Api = Request({
            method: "get",
            url: `/${prefix}/assets/btc/metrics`,
        })
            .then(successResolver)
            // Success
            .then((data = initialState.data) => {
                setState((old: any) => ({
                    ...old,
                    data,
                }))
            })
            // Error
            .catch((err) => {
                // Instead returns cancelled error
                if (isCancel(err)) return err

                setState((old: any) => ({
                    ...old,
                    error: err?.response?.data?.message || err.message,
                }))
            })

        // Do not proceed when request is cancelled
        if (isCancel(await Api)) return

        // After Request state
        setState((old: any) => ({
            ...old,
            loading: false,
        }))
    }

    return {
        state,
        getCurrencies: ajax,
    }
}

// More API paths here....
