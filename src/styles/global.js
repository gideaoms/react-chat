import { injectGlobal } from 'styled-components'
import colors from './colors'

injectGlobal`
  body {
    background: ${colors.backgroundColor};
    font-family: 'Roboto', sans-serif;
    font-size: 100%;
  }
`
