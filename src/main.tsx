import React, { StrictMode } from "react"
import { render } from "react-dom"
import { Toaster } from "react-hot-toast"

import { getAppTitle } from "@core/utilities"

import App from "@app/App"

import "minireset.css"

import "@core/styles/index.scss"

// @ts-ignore
// Set default page title
document.title = getAppTitle()

render(
    <StrictMode>
        <App />
        <Toaster position="bottom-center" reverseOrder={true} />
    </StrictMode>,
    document.getElementById("root")
)
