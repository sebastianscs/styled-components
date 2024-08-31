import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
const GlobalStyle = createGlobalStyle`

    ${reset}

    body {
        font-family: ${props => props.theme.fonts.base};
        color:#494949
    }

`;

export default GlobalStyle;