
import { defineConfig } from "vite";
import { resolve } from "path";
import React from 'react';
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    base: "/portfolio-demos/",
    root: "src",
    build: {
        outDir: "../docs",
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, "src/index.html"),
                Webpage: resolve(__dirname, "src/Webpage/web.html"),
                Pages: resolve(__dirname, "src/page/index.html"),
                Todo: resolve(__dirname, "src/toDoApp/toDo.html")
            },
        },
    },
})