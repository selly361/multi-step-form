import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html:focus-within {
    scroll-behavior: smooth;
}

div#root {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

}

body {
    height: 100vh;
    background: #EFF5FF;
    color: #022959;
    font-family: 'Ubuntu';
    font-style: normal;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 900px) {
        position: relative;
        display: initial;
    }
}

h2 {
    font-weight: 700;
    font-size: 32px;
    line-height: 37px;
}

p {
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    color: #9699AA;
}

ul,
ol {
    list-style: none;
}


button, input, fieldset {
    outline: unset;
    border: unset;
}

button {
    cursor: pointer;
}


a, 
button,
input {
    &:focus-visible {
        outline: 2px dashed #000;
        outline-offset: 2px;
      }
}

@media (prefers-reduced-motion: reduce) {
    
    html:focus-within {
        scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }

}

`

export default GlobalStyle
