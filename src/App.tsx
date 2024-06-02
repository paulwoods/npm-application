import './App.css'
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {Button, CssBaseline, PaletteMode, useTheme} from "@mui/material";
import {Stat} from "mui-component-library-mrpaulwoods";
import {ReactNode, useState} from "react";

export default function App() {

    const theme = useTheme()

    return (
        <>
            <DarkModeThemeProvider>
                <CssBaseline/>
                <h1>application: {theme.palette.mode} mode</h1>
                <Stat value={'54,321'} unit={'Unique Visitors Every Month'} />
            </DarkModeThemeProvider>
        </>
    )
}

const DarkModeThemeProvider = ({children} : {children: ReactNode}) => {

    const [mode, setMode] = useState<PaletteMode>('dark')
    const toggleMode = () => {
        setMode(old => old === "light" ? "dark" : "light")
    };

    const darkTheme = createTheme({
        palette: {
            mode: mode,
        },
    });

    return <ThemeProvider theme={darkTheme}>
        <Button variant="contained" color="primary" onClick={toggleMode}>Toggle Dark Mode</Button>
        {children}
    </ThemeProvider>
}