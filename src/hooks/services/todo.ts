import { useApiOne } from "@app/hooks/services/useApi"
import { useCallback, useEffect } from "react"

const prefix = "todos"

export const getList = () => {
    const initialState = {
        loading: false,
        data: [],
        error: null,
        options: {
            _page: 1,
            _limit: 4,
            id: undefined,
        },
    }

    const { Request, state, setState, successResolver, isCancel } =
        useApiOne(initialState)

    const ajax = async (payload = {}) => {
        // On Request state
        setState((old: any) => ({
            ...old,
            loading: true,
            error: initialState.error,
        }))

        // Api request
        const Api = Request({
            method: "get",
            url: `/${prefix}`,
            params: payload,
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

    const previous = () => {
        setState((old: any) => ({
            ...old,
            options: {
                ...old.options,
                _page: old.options._page - 1,
            },
        }))
    }

    const next = () => {
        setState((old: any) => ({
            ...old,
            options: {
                ...old.options,
                _page: old.options._page + 1,
            },
        }))
    }

    const filter = ({ id }: any) => {
        setState((old: any) => ({
            ...old,
            options: {
                // Reset pagination
                ...initialState.options,
                id,
            },
        }))
    }

    const refresh = useCallback(() => {
        const filterValues = { ...state.options }

        // Exclude empty values
        for (const field in filterValues) {
            const isEmpty = filterValues[field] === ""
            const isUndefined = filterValues[field] === undefined

            if (isEmpty || isUndefined) {
                delete filterValues[field]
            }
        }

        ajax({
            ...filterValues,
        })
    }, [state.options])

    // Refresh the list whenever options change
    useEffect(refresh, [refresh])

    return {
        state,
        refresh,
        next,
        previous,
        filter,
    }
}

export const getOne = () => {
    const initialState = {
        loading: false,
        data: null,
        error: null,
    }

    const { Request, state, setState, successResolver, isCancel } =
        useApiOne(initialState)

    const find = async (id: number) => {
        // On Request state
        setState((old: any) => ({
            ...old,
            loading: true,
            error: initialState.error,
        }))

        // Api request
        const Api = Request({
            method: "get",
            url: `/${prefix}/${id}`,
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
        find,
    }
}

// More API paths here....
