import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
  return {
    main: {
      width: '85%',
      margin: 'auto',
      padding: '10px 0 300px 0'
    },
    page: {
      color: '#555555',
      background: '#fff',
      padding: '3px 10px'
    },
    /*
    @media (max-width: 750px) {
      .main {
        padding: 0;
        width: auto;
      }
    }
    */

    footer: {
      backgroundColor: '#ccc',
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100vw',
      padding: 20,
      '& .footer-inner': {
        width: '85%',
        margin: 'auto',
        padding: '10px 0 0 0'
      }
    }
  };
});

const Page = ({ children }) => {
  let classes = useStyles();
  return (
    <div>
      <div className={classes.main}>
        <h1>Next.js. Demo</h1>
        <div className={classes.page}>{children}</div>
      </div>

      <footer className={classes.footer}>
        <div className="footer-inner">
          <p>
            <a
              href="https://github.com/blainegarrett/material-node-next-gae-demo"
              title="Fork me on GitHub"
            >
              v2.0 - See source code on Github
            </a>
          </p>

          <p>
            Demo is a port of the{' '}
            <a href="https://github.com/blainegarrett/material-node-next-gae-demo">
              node-material-next-gae
            </a>{' '}
            demo project and{' '}
            <a
              href="https://material-ui.com/getting-started/example-projects/"
              target="_new"
            >
              Material-UI Next.js example
            </a>
            .
          </p>
          <p>
            Artwork data provided by Minneapolis Institute of Arts{' '}
            <a href="https://github.com/artsmia/collection-elasticsearch">
              Elastic search api
            </a>
            .{' '}
          </p>
          <p>Artwork is copyright its respective copyright holders.</p>
        </div>
      </footer>
    </div>
  );
};
Page.propTypes = {
  children: PropTypes.node
};

export default Page;
