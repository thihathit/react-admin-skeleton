import React from "react"
import { Route, Switch } from "wouter"

// Core Hooks
import { routePreprocess } from "@core/hooks/actions/routePreprocess"

// Routes info
import Routes from "@app/routes"

const App = () => {
    routePreprocess(Routes)

    return (
        <Switch>
            {Routes.map(({ component, path, key }) => (
                <Route
                    key={key || path}
                    path={path}
                    component={component as any}
                />
            ))}
        </Switch>
    )
}

export default App
