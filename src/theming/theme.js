// Defines theme to use with jss and material-ui components
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const muiTheme = createMuiTheme({
  typography: {
    useNextVariants: true
    //fontFamily: '"Titillium Web", sans-serif',
  },
  palette: {
    primary: {
      light: purple[300],
      main: purple[500],
      dark: purple[700],
    },
    secondary: {
      light: green[300],
      main: green[500],
      dark: green[700],
    },
  },

  // Custom Variables available in makeStyles
  artworkListSize: '250px'
});

export default muiTheme;
