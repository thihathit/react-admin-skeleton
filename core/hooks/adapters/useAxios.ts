import { useEffect, useState } from "react"

import Axios, { AxiosResponse } from "axios"

const { CancelToken, isCancel, create } = Axios

export type TypeUseAxios = {
    baseURL: any
    initialState: any
}

export const successResolver = ({ data }: AxiosResponse) => data

export const useAxios = ({ baseURL, initialState }: TypeUseAxios) => {
    const apiSource = CancelToken.source()
    const cancelToken = apiSource.token

    const Request = create({
        baseURL,
        cancelToken,
    })

    const setAuth = (token?: string | undefined, type: string = "Bearer") => {
        Request.defaults.headers.common["Authorization"] = token
            ? `${type} ${token}`
            : null
    }

    const [state, setState] = useState(() => ({
        ...initialState,
    }))

    // Cancel everything on unmount
    useEffect(() => {
        return () => {
            apiSource.cancel()
        }
    }, [])

    return {
        Request,
        state,
        apiSource,
        setState,
        setAuth,
        successResolver,
        isCancel,
    }
}
