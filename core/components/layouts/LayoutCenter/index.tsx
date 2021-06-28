import React, { FC } from "react"

// Actions
import { useLayoutClass } from "@core/hooks/actions/useLayoutClass"

// Styled Elements
import { Container, InjectGlobalStyle, MainContent } from "./index.styled"

export interface LayoutCenterProps {
    BlockName?: string
}

const DefaultBlockName = "LayoutCenter"

const LayoutCenter: FC<LayoutCenterProps> = ({
    children,
    BlockName = DefaultBlockName,
}) => {
    useLayoutClass({ name: BlockName })

    return (
        <Container>
            <InjectGlobalStyle />

            <MainContent>{children}</MainContent>
        </Container>
    )
}

export default LayoutCenter
