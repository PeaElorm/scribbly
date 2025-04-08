import {createContext} from "react";

export const themes = {
    light:{
        background: "white",
        text: "black",
        type: "light",
    },
    dark:{
        background: "black",
        text: "white",
        type: "dark"
    }
}

export const ThemeContext = createContext({
    theme: themes.light,
    toggleTheme:() => {},
});