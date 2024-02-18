import { Color } from '../../models/color.model'

export type ThemeType = 'dark' | 'light'

export interface Theme {
  '--primary': Color | string
  '--primary-selected': Color | string
  '--secondary': Color | string
  '--secondary-selected': Color | string
  '--background': Color | string
  '--white': Color | string
}
