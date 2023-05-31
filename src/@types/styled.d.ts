import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

export type TTheme = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends TTheme {}
}
