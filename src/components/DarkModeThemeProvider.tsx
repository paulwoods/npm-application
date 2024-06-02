import {ReactNode, useState} from "react";
import {Button, CssBaseline, PaletteMode} from "@mui/material";
import {createTheme, ThemeProvider} from "@mui/material/styles";

export const DarkModeThemeProvider = ({children}: { children: ReactNode }) => {

    const [mode, setMode] = useState<PaletteMode>('dark')
    const toggleMode = () => {
        setMode(mode => mode === "light" ? "dark" : "light")
    };

    const darkTheme = createTheme({
        palette: {
            mode: mode,
        },
    });

    return <ThemeProvider theme={darkTheme}>
        <CssBaseline/>
        <Button variant="contained" color="primary" onClick={toggleMode}>Toggle Dark Mode</Button>
        {children}
    </ThemeProvider>
}