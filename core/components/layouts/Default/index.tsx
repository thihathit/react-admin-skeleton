import React, { FC } from "react"

// Actions
import { useLayoutClass } from "@core/hooks/actions/useLayoutClass"

// Component Blocks
import Navigation, { NavigationProps } from "@core/components/blocks/Navigation"

// Styled Elements
import {
    MainContent,
    Container,
    SidePanel,
    InjectGlobalStyle,
} from "./index.styled"

export interface LayoutDefaultProps {
    BlockName?: string
    routes: NavigationProps["routes"]
}

const DefaultBlockName = "LayoutDefault"

const LayoutDefault: FC<LayoutDefaultProps> = ({
    children,
    routes,
    BlockName = DefaultBlockName,
}) => {
    useLayoutClass({ name: BlockName })

    return (
        <Container>
            <InjectGlobalStyle />

            <SidePanel>
                <Navigation routes={routes} />
            </SidePanel>

            <MainContent>{children}</MainContent>
        </Container>
    )
}

export default LayoutDefault
