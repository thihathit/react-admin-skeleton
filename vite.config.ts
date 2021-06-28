import Path from "path"
import { defineConfig } from "vite"
import reactRefresh from "@vitejs/plugin-react-refresh"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [reactRefresh()],
    resolve: {
        alias: {
            "@app": Path.resolve(__dirname, "src"),
            "@core": Path.resolve(__dirname, "core"),
        },
    },
})
