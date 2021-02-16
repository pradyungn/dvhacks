
import base from '@rebass/preset'
import { merge } from 'lodash'

export const breakpoints = [32, 48, 64].map(w => `${w}em`)

export const space = [0, 4, 8, 16, 32, 64, 128, 256, 512]

export const fontSizes = [14, 16, 20, 24, 32, 48, 64, 96, 128]

export const palette = {
  darker: '#050505',
  dark: '#0f0f0f',
  darkless: '#4c4c4c',
  bandark: '#262626',
  // greyscale
  black: '#0f0f0f',
  muted: '#4c4c4c',
  smoke: '#cacaca',
  snow: '#e7e7e7',
  white: '#f0f0f0',
  // brand
  primary: '#e55e62',
  primaryWash: '#d36165',
  alt: '#13cfbf',
  altDark: '#05386b',
  altLight: '#6ed5fa',
  cool: '#8baa8c',
  coolWash: '#8baa8c',
}

const theme = merge(base, {
  breakpoints,
  space,
  fontSizes,
  initialColorMode: 'dark',
  colors: {
    ...palette,
    text: palette.black,
    background: palette.snow,
    cards: palette.white,
    muted: palette.muted,
    sunken: palette.smoke,
    bannerBG: palette.alt,
    bannerColor: palette.white,
    bannerColorAlt: palette.white,
    coolBg: palette.cool,
    modes: {
      dark: {
        text: palette.white,
        background: palette.dark,
        cards: palette.darkless,
        sunken: palette.muted,
        // primaryWash: '#3f3822',
        primaryWash: palette.primaryWash,
        bannerBG: palette.bandark,
        //bannerColor: palette.primary,
        bannerColor: palette.white,
        bannerColorAlt: palette.primaryWash,
        coolBg: palette.dark,
        cards: palette.darkless,
      }
    }
  },
  fonts: {
    body:
      'Roboto, sans-serif',
    heading: 'inherit',
    mono: 'Menlo, monospace'
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
    tight: 0.875
  },
  fontWeights: {
    body: '400',
    medium: '700',
    mediumbold: '800',
    bold: '900'
  },
  letterSpacings: {
    heading: '-0.05em',
    caps: '0.05em'
  },
  sizes: {
    superslim: 512,
    slim: 640,
    narrow: 768,
    container: 1024,
    wide: 1536
  },
  radii: {
    default: 6,
    extra: 9,
    circle: 99999
  },
  shadows: {
    card: '0 4px 8px rgba(0, 0, 0, 0.125)',
    sheet: '0 8px 32px rgba(0, 0, 0, 0.0625)'
  },
  text: {
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading'
    }
  },
  variants: {
    container: {
      width: '100%',
      maxWidth: 'container',
      mx: 'auto',
      px: 3
    },
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading'
    },
    card: {
      bg: 'cards',
      p: [3, 4],
      borderRadius: 'extra',
      boxShadow: 'card'
    },
    sheet: {
      bg: 'cards',
      borderRadius: 'extra',
      boxShadow: 'sheet',
      overflow: 'hidden'
    },
    avatar: {
      borderRadius: 'circle',
      objectFit: 'cover',
      objectPosition: 'center',
      flexShrink: 0
    }
  },
  styles: {
    a: {
      color: 'primary',
      cursor: 'pointer',
      ':hover, :focus': {
        color: 'alt'
      }
    },
    p: {
      fontFamily: 'mono'
    },
    img: {
      maxWidth: '100%',
      height: 'auto'
    },
    navitem: {
      cursor: 'pointer',
      borderRadius: 'circle',
      fontWeight: 'medium',
      fontSize: 2,
      lineHeight: 'body',
      textDecoration: 'none',
      py: 1,
      px: [2, 3],
      mx: [null, 1],
      transition: 'background .125s ease-in-out',
      ':focus, :hover, :active': {
        bg: 'sunken'
      },
    ':visited': {
        color: 'primary'
    }
    }
  }
})

export default theme
