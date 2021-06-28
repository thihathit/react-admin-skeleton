import React, { FC } from "react"
import toast from "react-hot-toast"

// Actions
import { usePageClass } from "@core/hooks/actions/usePageClass"

// Components Layouts
import LayoutCenter from "@core/components/layouts/LayoutCenter"

// Components Blocks
import LoginForm from "@core/components/blocks/LoginForm"

// Components Elements
import Spinner from "@core/components/elements/Spinner"

// Styled Elements
import { Container, Title } from "./index.styled"

export interface LoginProps {
    BlockName?: string
}

const DefaultBlockName = "PageLogin"

const Login: FC<LoginProps> = ({ BlockName = DefaultBlockName }) => {
    usePageClass({ name: BlockName })

    const state = {
        loading: false,
    }

    const onSuccess = () => {
        // toast.success(`Submitted!`)
        toast.error(`Please bind API`)
    }

    return (
        <LayoutCenter>
            <Container>
                <Title>Login</Title>

                <LoginForm onSuccess={onSuccess} loading={state.loading} />

                <Spinner active={state.loading} fullPage={true} />
            </Container>
        </LayoutCenter>
    )
}

export default Login
