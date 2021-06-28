import styled, { createGlobalStyle } from "styled-components"

export const Container = styled.section``

export const LoadingText = styled.div`
    text-align: center;
`

export const Message = styled.div`
    cursor: progress;
    color: #fff;
    background-color: var(--dorminant_1);
    padding: 15px 25px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    border-radius: 3px;

    font-weight: 400;

    text-align: center;
    margin-bottom: 25px;
`

export const InjectGlobalStyle = createGlobalStyle`
    .ActivePage--PageLogout {
        background-color: var(--color_base);
    }
`
