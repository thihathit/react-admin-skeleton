import styled, { css, createGlobalStyle } from "styled-components"

export const Container = styled.section`
    width: 100%;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
`

export const MainContent = styled.main``

export const InjectGlobalStyle = createGlobalStyle`
    .ActiveLayout--LayoutCenter {
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
