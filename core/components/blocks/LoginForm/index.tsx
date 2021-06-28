import React, { FC, useCallback, useEffect, SyntheticEvent } from "react"
import useModels from "react-use-models"
import useValidator from "react-joi"
import Joi from "joi"

// Styled Elements
import { Actions, Container, Fields } from "./index.styled"

export interface LoginFormProps {
    onSuccess: (values: any) => void
    loading?: boolean
}

const defaultState = {
    username: null,
    password: null,
}

const LoginForm: FC<LoginFormProps> = ({ onSuccess, loading = false }) => {
    const { models, register } = useModels({
        defaultState,
    })
    const { state, setData } = useValidator({
        initialData: defaultState,
        schema: Joi.object({
            username: Joi.string()
                .email({
                    tlds: { allow: false },
                })
                .required()
                .messages({
                    "string.empty": "Required",
                    "string.email": "Must be a valid email",
                    "any.required": "Required",
                }),
            password: Joi.string().required().messages({
                "string.empty": "Required",
                "any.required": "Required",
            }),
        }),
    })

    const getErrors = useCallback(
        (field) => {
            return state.$errors[field]
                .map((data: any) => data.$message)
                .join(",")
        },
        [state.$errors]
    )

    const onSubmit = (e: SyntheticEvent) => {
        e.preventDefault()

        onSuccess(state.$data)
    }

    // Sync model <-> validator
    useEffect(() => {
        setData(models)
    }, [models])

    return (
        <Container>
            <form className={`form-layout-basic`} onSubmit={onSubmit}>
                <Fields className={`username field-elements`}>
                    <input
                        {...register.input({ name: "username" })}
                        placeholder="email"
                        autoComplete="username"
                    />

                    {getErrors("username") && (
                        <div className="field-message error">
                            {getErrors("username")}
                        </div>
                    )}
                </Fields>

                <Fields className={`password field-elements`}>
                    <input
                        {...register.input({ name: "password" })}
                        type="password"
                        placeholder="password"
                        autoComplete="current-password"
                    />

                    {getErrors("password") && (
                        <div className="field-message error">
                            {getErrors("password")}
                        </div>
                    )}
                </Fields>

                <Actions className={`actions field-elements form-actions`}>
                    <button disabled={state.$auto_invalid || loading}>
                        Submit
                    </button>
                </Actions>
            </form>
        </Container>
    )
}

export default LoginForm
