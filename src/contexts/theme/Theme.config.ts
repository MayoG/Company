import { Color } from '../../models/color.model'
import { ThemeType, Theme } from './Theme.model'

export const THEMES: Record<ThemeType, Theme> = {
  light: {
    '--primary': Color.VIOLET,
    '--primary-selected': Color.VIOLET,
    '--secondary': Color.DARK_VIOLET,
    '--secondary-selected': Color.VIOLET,
    '--background': Color.LIGHT_GRAY,
    '--white': Color.WHITE,
  },
  dark: {
    '--primary': '#ebc0e9',
    '--primary-selected': Color.VIOLET,
    '--secondary': Color.WHITE,
    '--secondary-selected': Color.VIOLET,
    '--background': Color.DARK_VIOLET,
    '--white': Color.WHITE,
  },
}
