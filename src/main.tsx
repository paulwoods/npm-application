import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {DarkModeThemeProvider} from "./components/DarkModeThemeProvider.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <DarkModeThemeProvider>
            <App/>
        </DarkModeThemeProvider>
    </React.StrictMode>,
)
