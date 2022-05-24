interface Theme {
  light: {
    primary: string;
    secondary: string;
  };
  dark: {
    primary: string;
    secondary: string;
  };
  cardFonts: {
    '& h2': {
      fontSize: string;
    };
  };
}

const theme: Theme = {
  light: {
    primary: 'gray',
    secondary: 'red',
  },
  dark: {
    primary: 'black',
    secondary: 'red',
  },
  cardFonts: {
    '& h2': {
      fontSize: '1.5rem',
    },
  },
};

export default theme;
