import React from 'react';
import PropTypes from 'prop-types';

import 'isomorphic-unfetch';
import Photo from '../../src/components/frame';
import Page from '../../src/components/Page';
import Head from 'next/head';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  permalink: {
    padding: theme.spacing.unit * 10,
    'text-align': 'center',
  },
  wrap: {
    display: 'inline-block',
    border: '1px solid #999',
    margin: 'auto',
  }
});

class ArtworkPage extends React.Component {
  static async getInitialProps (ctx) {
    // Get id off query (via <Link as="/artwork?artworkId=..."> and express mapping of params => query)

    let id = ctx.query.artworkId; // Query Params
    //let id = ctx.req.params.id; // Route Params

    // Async load artwork resource
    const res = await fetch('https://search.artsmia.org/id/' + id);
    const json = await res.json();

    // The api returns "null" as the body with a 200 status code if an id doesn't exist
    let resourceNotFound = false;
    if (json == null) {
      ctx.res.statusCode = 404; // Tell next.js server to issue a 404 status
      resourceNotFound = true;
    }

    return { artwork: json, resourceNotFound:resourceNotFound };
  }

  render() {
    var { classes, artwork, resourceNotFound} = this.props;

    if (resourceNotFound) {
      return (<Page>Could not find artwork</Page>);
    }

    return (
      <Page>
        <Head>
          <title>{ artwork.title } Next.js demo</title>
        </Head>

        <div className={classes.permalink}>
          <div className={classes.wrap}>
            <Photo artwork={artwork} />
          </div>
        </div>
      </Page>
    );
  }
}


export default withStyles(styles)(ArtworkPage);

ArtworkPage.propTypes = {
  classes: PropTypes.object,
  artwork: PropTypes.object,
  resourceNotFound: PropTypes.bool
};