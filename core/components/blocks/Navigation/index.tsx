import React, { FC, useCallback, ReactNode } from "react"
import { useLocation, RouteProps } from "wouter"

// Styled Elements
import { Container, NavLinks, Element } from "./index.styled"

/**
 * @isNav Display as Navigation link
 * @navTitle Navigation text
 * @path RouteProps["path"]
 */
export type NavigationPropTypeRoutes = {
    isNav: boolean
    path: RouteProps["path"]
    navTitle: string
}

export interface NavigationProps {
    routes: NavigationPropTypeRoutes[]
}

const Navigation: FC<NavigationProps> = ({ routes }) => {
    const [location] = useLocation()

    const NavRoutes = routes.filter(({ isNav = false }) => {
        // Check navigation enabled
        if (!isNav) return false

        return true
    })

    const getLinkClass = useCallback((path) => location === path, [location])

    return (
        <Container>
            {NavRoutes.map(({ navTitle, path }) => (
                <NavLinks key={path}>
                    <Element to={path} active={getLinkClass(path)}>
                        {navTitle}
                    </Element>
                </NavLinks>
            ))}
        </Container>
    )
}

export default Navigation
