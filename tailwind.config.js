const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Arial',
          // ...defaultTheme.fontFamily.sans
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"
        ]
      },
      fontSize: {
        ss: '0.666666rem'
      },
      colors: {
        engins: {
          newnavy: '#2f3940',
          bubblyblue: '#07a6db',
          kewlblue: '#057fa8'
        },
        primary: {
          base: '#057fa8',
          light: '#07a6db',
          dark: '#0554a8'
        },
        light: {
          surface: '#F8FAFC',
          onSurfacePrimary: '#2f3940',
          onSurfaceSecondary: '#333333',
          elevatedSurface: defaultTheme.colors.white,
          border: defaultTheme.colors.gray['300']
        },
        dark: {
          surface: '#2f3940',
          onSurfacePrimary: '#F5F7FA',
          onSurfaceSecondary: '#B8C2CC',
          elevatedSurface: '#333333',
          border: defaultTheme.colors.gray['600']
        }
      },
      fill: theme => ({
        'engins-newnavy': theme('colors.engins.newnavy'),
        'engins-bubblyblue': theme('colors.engins.bubblyblue'),
        'engins-kewlblue': theme('colors.engins.kewlblue')
      }),
      stroke: theme => ({
        'engins-newnavy': theme('colors.engins.newnavy'),
        'engins-bubblyblue': theme('colors.engins.bubblyblue'),
        'engins-kewlblue': theme('colors.engins.kewlblue')
      }),
      boxShadow: {
        nuxt: '0px 0px 8px rgba(0, 0, 0, 0.101562)',
        'inset-nuxt': 'inset 0px 0px 8px rgba(0, 0, 0, 0.101562)'
      },
      inset: {
        24: '6rem'
      },
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%'
      },
      transitionTimingFunction: {
        'ease-in-material': 'cubic-bezier(0.4, 0, 1, 1)',
        'ease-out-material': 'cubic-bezier(0, 0, 0.2, 1)',
        'ease-in-out-material': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'ease-in-out-material-sharp': 'cubic-bezier(0.4, 0, 0.6, 1)'
      }
    }
  },
  variants: {
    display: ['responsive', 'after'],
    margin: ['responsive', 'after'],
    width: ['responsive', 'after'],
    borderWidth: ['responsive', 'after'],
    borderRadius: ['responsive', 'after'],
    borderColor: [
      'responsive',
      'hover',
      'focus',
      'dark',
      'light',
      'after',
      'light:after',
      'dark:after'
    ],
    backgroundColor: [
      'responsive',
      'hover',
      'focus',
      'dark',
      'light',
      'dark:hover',
      'light:hover'
    ],
    textColor: [
      'responsive',
      'hover',
      'focus',
      'group-hover',
      'dark',
      'light',
      'dark:hover',
      'light:hover'
    ]
  },
  plugins: [
    plugin(function ({ addVariant, theme, e, prefix, config }) {
      const colorModeVariants = ['light', 'dark']
      colorModeVariants.forEach(mode => {
        addVariant(mode, ({ modifySelectors, separator }) => {
          modifySelectors(({ className }) => {
            return `.${mode}-mode .${e(`${mode}${separator}${className}`)}`
          })
        })
      })
      const pseudoVariants = ['after', 'before']
      pseudoVariants.forEach(pseudo => {
        addVariant(pseudo, ({ modifySelectors, separator }) => {
          modifySelectors(({ className }) => {
            return `.${e(`${pseudo}${separator}${className}`)}::${pseudo}`
          })
        })
      })
      // generate chained color mode and pseudo variants
      colorModeVariants.forEach(mode => {
        pseudoVariants.forEach(pseudo => {
          addVariant(`${mode}:${pseudo}`, ({ modifySelectors, separator }) => {
            modifySelectors(({ className }) => {
              return `.${mode}-mode .${e(
                `${mode}${separator}${pseudo}${separator}${className}`
              )}::${pseudo}`
            })
          })
        })
      })
      // states for color modes
      const states = ['hover']
      colorModeVariants.forEach(mode => {
        states.forEach(state => {
          addVariant(`${mode}:${state}`, ({ modifySelectors, separator }) => {
            modifySelectors(({ className }) => {
              return `.${mode}-mode .${e(
                `${mode}${separator}${state}${separator}${className}`
              )}:${state}`
            })
          })
        })
      })
    })
  ],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ],
    options: {
      whitelist: ['dark-mode', 'light-mode']
    }
  }
}
