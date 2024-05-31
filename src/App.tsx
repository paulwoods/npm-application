import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Box, Button, createTheme, CssBaseline, ThemeProvider} from "@mui/material";

function App() {
    const [count, setCount] = useState(0)

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });

    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline/>

                    <Box display="flex" flexDirection="column" justifyContent="flex-start" alignItems="center"
                         gap="1em">
                        <Button variant="outlined" color="primary">primary</Button>
                        <Button variant="outlined" color="secondary">secondary</Button>
                        <Button variant="outlined" color="success">success</Button>
                        <Button variant="outlined" color="error">error</Button>
                        <Button variant="outlined" color="info">info</Button>
                        <Button variant="outlined" color="warning">warning</Button>
                    </Box>
                    <Box display="flex" flexDirection="column" justifyContent="flex-start" alignItems="center"
                         gap="1em">
                        <Button variant="text" color="primary">primary</Button>
                        <Button variant="text" color="secondary">secondary</Button>
                        <Button variant="text" color="success">success</Button>
                        <Button variant="text" color="error">error</Button>
                        <Button variant="text" color="info">info</Button>
                        <Button variant="text" color="warning">warning</Button>
                    </Box>
                </Box>

                <div>
                    <a href="https://vitejs.dev" target="_blank">
                        <img src={viteLogo} className="logo" alt="Vite logo"/>
                    </a>
                    <a href="https://react.dev" target="_blank">
                        <img src={reactLogo} className="logo react" alt="React logo"/>
                    </a>
                </div>
                <h1>Vite + React</h1>
                <div className="card">
                    <button onClick={() => setCount((count) => count + 1)}>
                        count is {count}
                    </button>
                    <p>
                        Edit <code>src/App.tsx</code> and save to test HMR
                    </p>
                </div>
                <p className="read-the-docs">
                    Click on the Vite and React logos to learn more
                </p>
            </ThemeProvider>
        </>
    )
}

export default App
