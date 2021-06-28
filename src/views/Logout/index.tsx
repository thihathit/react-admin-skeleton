import React, { useEffect, useState } from "react"
import { useLocation } from "wouter"

// Actions
import { usePageClass } from "@core/hooks/actions/usePageClass"

// Components Layouts
import LayoutCenter from "@core/components/layouts/LayoutCenter"

// Components Elements
import Spinner from "@core/components/elements/Spinner"

import { wait } from "@core/utilities"

// Styled Elements
import {
    Container,
    InjectGlobalStyle,
    LoadingText,
    Message,
} from "./index.styled"

const DefaultBlockName = "PageLogout"

const Logout = ({ BlockName = DefaultBlockName }) => {
    usePageClass({ name: BlockName })

    const [path, shift] = useLocation()

    const [loading, setLoading] = useState(true)

    // Clean up Auth session here
    const doActions = () => {}

    useEffect(() => {
        ;(async () => {
            doActions()

            await wait(500)
            setLoading(false)

            await wait(2500)
            shift("/login", {
                replace: true,
            })
        })()
    }, [])

    return (
        <LayoutCenter>
            <InjectGlobalStyle />

            <Container>
                {loading && (
                    <LoadingText>
                        <Spinner active={true} />
                        <br />
                        Clearing session..
                    </LoadingText>
                )}

                {!loading && <Message>Successfully logged out.</Message>}
            </Container>
        </LayoutCenter>
    )
}

export default Logout
