import React, { ReactNode } from "react"
import { RouteProps } from "wouter"

// Layouts
import LayoutDefault from "@core/components/layouts/Default"

// Blocks
import { NavigationPropTypeRoutes } from "@core/components/blocks/Navigation"

// Views
import PageIndex from "@app/views/Index"
import PageLogin from "@app/views/Login"
import PageLogout from "@app/views/Logout"

// Types
import { Modify } from "@core/types"

/**
 * @extends NavigationPropTypeRoutes
 * @key Route identity, required when "path" is undefined
 * @title Browser tab or Document title text
 */
export interface TypeRoutes
    extends Modify<
        NavigationPropTypeRoutes,
        {
            path?: NavigationPropTypeRoutes["path"]
            isNav?: NavigationPropTypeRoutes["isNav"]
            navTitle?: NavigationPropTypeRoutes["navTitle"]
        }
    > {
    key?: string // Route identity, required when "path" is undefined
    title: string // Browser tab or Document title text
    component: RouteProps["component"] | ReactNode
}

const UseLayoutDefault = ({ Page, ...props }: any) => {
    return (
        <LayoutDefault routes={Routes as NavigationPropTypeRoutes[]}>
            <Page {...props} />
        </LayoutDefault>
    )
}

const Routes: TypeRoutes[] = [
    {
        isNav: true,
        path: "/",
        title: "Dashboard",
        navTitle: "🎯 Dashboard",
        component: (props) => <UseLayoutDefault Page={PageIndex} {...props} />,
    },
    {
        isNav: true,
        path: "/logout",
        title: "Logout",
        navTitle: "🚪 Logout",
        component: PageLogout,
    },
    {
        isNav: true,
        path: "/login",
        title: "Login",
        navTitle: "🔑 Login",
        component: PageLogin,
    },
    {
        key: "404",
        title: "Page not found",
        component: () => <>404, Not Found!</>,
    },
]

export default Routes
