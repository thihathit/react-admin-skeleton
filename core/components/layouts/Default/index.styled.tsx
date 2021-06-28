import styled, { css, createGlobalStyle } from "styled-components"

import { screenMax } from "@core/styled/mixins.styled"

export const Container = styled.section`
    min-height: 100%;
    width: 100%;

    display: grid;
    grid-template-columns: 300px minmax(0, 1fr);

    ${screenMax(1400, () => {
        return css`
            grid-template-columns: auto minmax(0, 1fr);
        `
    })}

    ${screenMax(1024, () => {
        return css`
            grid-template-columns: 100%;
            grid-template-rows: auto 1fr;

            h1 {
                margin-bottom: 20px;
            }
        `
    })}
`

export const MainContent = styled.main`
    > * {
        min-height: 100%;
        padding: 30px;

        position: relative;
        z-index: 0;

        ${screenMax(1024, () => {
            return css`
                padding: 20px;
            `
        })}
    }
`

export const SidePanel = styled.aside`
    padding: 30px 0;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    transition: 0.3s box-shadow;
    background-color: var(--dorminant_1);

    position: relative;
    z-index: 1;

    &:hover {
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    }

    > *:not(:last-child) {
        margin-bottom: 15px;
    }
`

export const InjectGlobalStyle = createGlobalStyle`
    .ActiveLayout--LayoutDefault {
        body {
            overflow-y: auto;
            overflow-x: hidden;
        }
        #root {
            min-height: 100%;
            min-height: 100%;
            display: flex;
        }
    }
`
