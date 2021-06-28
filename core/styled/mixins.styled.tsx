import { css } from "styled-components"

export const screenMax = (size: number, styles: Function) => css`
    @media only screen and (max-width: ${size}px) {
        ${styles()}
    }
`

export const xPrefixes = () => css`
    display: block;
    content: " ";
    position: absolute;
    z-index: 0;
`

export const xBefore = () => css`
    &:before {
        ${xPrefixes()}
    }
`

export const xAfter = () => css`
    &:after {
        ${xPrefixes()}
    }
`

export const xPrepare = () => css`
    position: relative;

    ${xBefore()}
    ${xAfter()}
`

export const resetButton = (block = true) => css`
    ${block &&
    css`
        display: block;
    `}

    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
`

export const resetInput = () => css`
    display: block;
    background: none;
    border: none;
`

export const layer = () => css`
    background-color: var(--color_layer);
    padding: 15px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    overflow: hidden;
`
