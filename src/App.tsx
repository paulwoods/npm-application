import './App.css'
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {Input, Label, Button, Stat} from "mui-component-library-mrpaulwoods";
import {CssBaseline} from "@mui/material";

function App() {

    const darkTheme = createTheme({
        palette: {
            mode: 'light',
        },
    });

    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline/>
                <h1>application: {darkTheme.palette.mode} mode</h1>
                <Stat value={'55,555'} unit={'Unique Visitors Every Month'} />
                <div style={{display:"flex", flexDirection:"column", gap: "1em"}}><Label>The Label</Label>
                    <Input></Input>
                    <Button>The Button</Button>
                </div>
            </ThemeProvider>
        </>
    )
}

export default App
