import React from "react"
import styled, { css } from "styled-components"
import { Link, LinkProps } from "wouter"

import { screenMax } from "@core/styled/mixins.styled"

export const Container = styled.section`
    display: grid;
    grid-template-columns: 100%;
    grid-gap: 5px;

    ${screenMax(1024, () => {
        return css`
            padding: 0 20px;
            margin: -5px -10px;
            flex-flow: wrap;
            display: flex;
        `
    })}
`

export const NavLinks = styled.div`
    font-weight: 600;
    font-size: 0.9em;

    ${screenMax(1024, () => {
        return css`
            margin: 5px;
        `
    })}
`

type ElementProps = {
    active?: boolean
}
export const Element = styled(
    ({ active, ...rest }: LinkProps & ElementProps) => <Link {...rest} />
)(
    ({ active = false }: ElementProps) => css`
        display: block;
        padding: 13px 25px;
        border: 3px solid transparent;

        transition: 0.3s all;

        &,
        &:visited,
        &:link {
            color: #fff;
            background-color: rgba($color: #000000, $alpha: 0.1);
            border-left-color: rgba($color: #fff, $alpha: 0.2);

            ${() => {
                return (
                    active &&
                    css`
                        color: inherit;
                        background-color: #fff;
                        border-left-color: var(--dorminant_1);
                    `
                )
            }}
        }

        &:hover {
            color: inherit;
            background-color: #fff;
            border-left-color: #fff;
        }

        ${screenMax(1024, () => {
            return css`
                padding: 3px 12px;
                border-radius: 30px;
            `
        })}
    `
)
