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
