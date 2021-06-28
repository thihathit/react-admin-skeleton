import styled, { css } from "styled-components"

import { layer, screenMax } from "@core/styled/mixins.styled"

export const Container = styled.section`
    background-color: var(--color_base);
`

export const CardGrid = styled.article`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;

    &:not(:last-child) {
        margin-bottom: 20px;
    }

    ${screenMax(800, () => {
        return css`
            grid-template-columns: 100%;
        `
    })}
`

export const Card = styled.article`
    ${layer()}
`
