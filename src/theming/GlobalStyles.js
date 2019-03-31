import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => {
  return {
    '@global': {
      html: {
        'font-family': 'sans-serif',
        '-webkit-font-smoothing': 'unset',
        '-moz-osx-font-smoothing': 'unset',
        'font-size': '16px'
      },
      a: {
        color: theme.palette.primary[500],
        textDecoration: 'none',
        '&:hover': {
          textDecoration: 'underline'
        }
      },
      p: {
        color: '#555',
        'line-height': '1.6'
      },
      'li, p': {
        color: '#555',
        'line-height': '1.6'
      },

      // Blog article styles...
      '.img-responsive': {
        width: '100%'
      },
      '.list-unstyled': {
        //'padding-left': 0,
        //'list-style': 'none'
      },

      'ul, ol': {
        'margin-top': 0,
        'margin-bottom': '10px'
      }
    }
  };
});

export default function GlobalStyles() {
  useStyles();
  return null;
}
