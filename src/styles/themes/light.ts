export default {
  title: 'light',
  border: {
    radius: '0.4rem'
  },
  font: {
    family:
      "Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 700,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.4rem',
      huge: '3.6rem'
    }
  },
  colors: {
    purple: '#835AFD',
    hoverPurple: '#6F4BD8',
    lightPink: '#D67EE2',
    red: '#EA4335',
    darkPink: '#E559F9',
    danger: '#E73F5D',
    hoverDanger: '#D73754',
    textWhite: '#F8F8F8',
    white: '#FFFFFF',
    black: '#29292E',
    shadow: '#050206',
    lightGray: '#DBDCDD',
    hoverLightGray: '#CECECE',
    mediumGray: '#A8A8B3',
    hoverMediumGray: '#7E7E86',
    darkGray: '#737380',

    background: '#F8F8F8',
    text: '#333333',
    inputBackground: '#FFFFFF',
    answeredQuestionBackground: '#DBDCDD'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem',
    huge: '6.4rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const
