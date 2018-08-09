import { injectGlobal } from 'styled-components'

injectGlobal`
  * {
    box-sizing: border-box;
    outline: 0;
  }

  html, #app {
    height: 100%;
  }

  body {
    background: #fff;
    font-family: 'Roboto', sans-serif;
    font-size: 100%;
    height: 100%;
  }
`
