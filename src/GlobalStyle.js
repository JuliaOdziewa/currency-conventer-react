import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    #root {
        font-family: 'Poppins', sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        margin: 0 auto;
        padding: 15px;
        background-image: url(https://wallpapercave.com/wp/wp8375015.jpg);
        background-size: cover;
        background-position: center;
    }


`;