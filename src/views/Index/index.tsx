import React, { FC } from "react"

// Components
import Spinner from "@core/components/elements/Spinner"

// Actions
import { usePageClass } from "@core/hooks/actions/usePageClass"

// Api Service
import { getList } from "@app/hooks/services/todo"
import { getBpi } from "@app/hooks/services/coins"

// Styled Elements
import { Container, Card, CardGrid } from "./index.styled"

export interface IndexProps {
    BlockName?: string
}

const DefaultBlockName = "PageIndex"

const Index: FC<IndexProps> = ({ BlockName = DefaultBlockName }) => {
    usePageClass({ name: BlockName })

    const { state, filter, next, previous, refresh } = getList()
    const { state: stateCurrencies, getCurrencies } = getBpi()

    return (
        <Container>
            <h1>Index page</h1>

            <CardGrid>
                <Card>
                    <h2>Jsonplaceholder API</h2>
                    <br />
                    <input
                        type="number"
                        onInput={(e: any) => filter({ id: e.target.value })}
                    />
                    <button onClick={refresh}>Refresh</button>
                </Card>

                <Card>
                    Page: {state.options._page}
                    <br />
                    <br />
                    <button
                        onClick={previous}
                        disabled={state.options._page == 1}
                    >
                        Previous
                    </button>
                    <button onClick={next} disabled={state.options.id}>Next</button>
                </Card>
            </CardGrid>

            <CardGrid>
                {state.data.map((item: any) => (
                    <Card key={item.id}>
                        <pre>{JSON.stringify(item, null, 2)}</pre>
                    </Card>
                ))}
            </CardGrid>

            <Spinner active={state.loading} />

            <CardGrid>
                <Card>
                    <h2>Messari API</h2>
                    <br />
                    <button onClick={getCurrencies}>Load Currencies</button>
                </Card>

                <Card>
                    {!stateCurrencies.loading && (
                        <pre style={{ overflow: "auto" }}>
                            {JSON.stringify(stateCurrencies.data, null, 2)}
                        </pre>
                    )}

                    <Spinner active={stateCurrencies.loading} />
                </Card>
            </CardGrid>
        </Container>
    )
}

export default Index
