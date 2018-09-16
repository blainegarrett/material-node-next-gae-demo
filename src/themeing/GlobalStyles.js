import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const globalStyles = (theme) => {
  return {
    '@global': {
      'html': {
        'font-family': 'sans-serif',
        '-webkit-font-smoothing': 'unset',
        '-moz-osx-font-smoothing': 'unset',
        'font-size': '13px',
      },
      'a': {
        color: theme.palette.primary[500],
        textDecoration: 'none',
        '&:hover': {
          textDecoration: 'underline'
        },
      },
      'p': {
        'color': '#555',
        'line-height': '1.6'
      },
      'li, p': {
        'color': '#555',
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
        'margin-bottom': '10px',
      }
    }
  };
};

class GlobalStyles extends React.Component {
  componentDidMount() {
    const jssStyles = document.getElementById('jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }
  render() { return null; }
}

export default withStyles(globalStyles)(GlobalStyles);