import './App.css'
import {useTheme} from "@mui/material";
import {Stat} from "mui-component-library-mrpaulwoods";

export default function App() {

    const theme = useTheme()

    return (
        <>
            <h1>application: {theme.palette.mode} mode</h1>
            <Stat value={'54,321'} unit={'Unique Visitors Every Month'}/>
        </>
    )
}

