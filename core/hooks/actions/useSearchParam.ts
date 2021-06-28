import { useEffect, useState } from "react"

const getValue = (param: any, defaultValue: any) =>
    new URLSearchParams(window.location.search).get(param) || defaultValue

export const useSearchParam = (param: any, defaultValue = null) => {
    const [value, setValue] = useState(() => getValue(param, defaultValue))

    const onChange = () => setValue(getValue(param, defaultValue))

    useEffect(() => {
        window.addEventListener("popstate", onChange)
        window.addEventListener("pushstate", onChange)
        window.addEventListener("replacestate", onChange)

        return () => {
            window.removeEventListener("popstate", onChange)
            window.removeEventListener("pushstate", onChange)
            window.removeEventListener("replacestate", onChange)
        }
    }, [param])

    return value
}
