import { useEffect } from "react"
import { RouteProps, useLocation, useRouter } from "wouter"

import { getAppTitle } from "@core/utilities"

/**
 * @path RouteProps["path"]
 * @title Browser tab or Document title text
 */
export type TypeRoutePreprocess = {
    path?: RouteProps["path"]
    title: string
}

export const routePreprocess = (Routes: TypeRoutePreprocess[]) => {
    const { matcher } = useRouter()
    const [location] = useLocation()

    // Sync page title
    useEffect(() => {
        let RouteInfo = Routes.find(
            ({ path }) => matcher(path as any, location)[0]
        )

        // If failed to get route info,
        // Use 404 route info
        if (!RouteInfo) {
            RouteInfo = Routes.find(({ path }) => path == undefined)
        }

        if (!RouteInfo) return

        // @ts-ignore
        // Set page Title
        document.title = getAppTitle({
            title: RouteInfo.title,
        })
    }, [location])
}
