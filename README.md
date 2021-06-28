This project is bootstrapped with [ViteJS](https://vitejs.dev).

## Main Specification

-   Vite JS
-   React JS
-   sass
-   minireset.css
-   styled-components
-   wouter
-   react-use-models
-   react-joi
-   joi
-   react-hot-toast
-   axios

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn dev

# build production
$ yarn build
```



## Coding practice

- Alias imports

  - This project uses `alias`(rollup alias from Vitejs) for easier folder management, you're highly encouraged to use as well. Config file located at `./vite.config.ts`.
    - Note: Since we use Typescript, When adding/updating alias, don't forget to modify `tsconfig.json`'s `"paths"` as well.

- Component structure, Indexable component file names through folder name is recommended.

  - Please see the following example:
    `MyComponent/`

    - index.tsx
    - index.styled.tsx
    - `MyComponentChild/`
      - index.tsx
      - index.styled.tsx

    Indexable import:

    ```javascript
    import MyComponent from "@app/components/MyComponent"
    import MyComponentChild from "@app/components/MyComponent/MyComponentChild"
    ```

- Styles

  - This project contains SASS(pre-configured by Vitejs)

    - Uses as a base styling & class based styles like form elements.

    - All the pre-bundled default SCSS files located in `@core/` and shouldn't get in the way of your custom style integrations.
      In case you would like to disable these default styles, you just need to remove the import from `@app/main.tsx`.

      ```javascript
      // import "@core/styles/index.scss"
      ```

      

  - `styled-components` for all Scoped / Component styles



## Folder structure & Alias

-   `root/`
    -   `core/*` <-- alias = `@core/`
        -   Contains general purpose reusable components, styles & utilities.
            Thus, should not modify them or place any business oriented code files here. Please use `./src/`(`@app/`) Directory for that.
        -   Modifying `@core/` directory should only be done in this skeleton repo.
        -   **Structure**
            -   components/
                -   blocks/
                    -   Logical components
                -   elements/
                    -   Pure components
                -   layouts/
                    -   Page container components
    -   `src/*` <-- alias = `@app/`
        -   This is where business oriented codes should be located.
        -   By default, There'll be a few files serving as **example codes** which uses `@core` features. If `@core` features doesn't satisfy the needs, feel free to replace them with custom features. Basically you should be able to do whatever you want in `@app/` directory.
    -   `index.html` <-- Vitejs uses index.html as **main entry point**.
    -   ...



## UI / Theme

This project doesn't use any UI libraries, instead all the `@core` components has it's own stylings, especially they offer CMS-like layouts and navigation. So core components has built-in UI.

In case, the built-in UI doesn't satisfy your needs and prefers a custom solution, you can completely ditch the `@core/` or `./core/` folder easily.



## Handling XHR / AJAX request

This project contains `react-query`-like, state based **Axios adapter hook**. The only difference with react-query is, Axios adapter take care of cancelling requests at component unmount events while being a simple hook. This will let you take more control over how your request & response payloads are handled with useState.
The adapter hook exposes:

- `apiSource` which you can use to cancel your requests at any circumstances.
- `setAuth` used to set `Authorization` header state

**Example usage** is provided in `@app/hooks/services/` & `@app/view/Index`

**Recommended pattern**: The example follows code extraction style. Where all the HTTP request/response logics are handled within `@app/hooks/services/` directory and returns methods & functions to trigger them from consuming components, using custom hook style.

**Axios adapter is optional**. Like any other features in this project, it's completely optional as it stays inside `@core/`. So feel free to use any solutions that would satisfy your needs.