import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#5e6c5b", // forest green shade
            contrastText: "#fefcf6", // cloud white shade for text on primary
        },
        secondary: {
            main: "#162a2c", // dark shade
            contrastText: "#fefcf6", // cloud white shade for text on secondary
        },
        background: {
            default: "#fefcf6", // cloud white shade for default background
        },
        text: {
            primary: "#162a2c", // midnight shade for primary text
            secondary: "#5e6c5b", // forest green shade for secondary text
        }
    },
});

export default theme;
