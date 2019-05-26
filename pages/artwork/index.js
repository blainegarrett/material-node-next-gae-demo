import React from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Photo from '../../src/components/frame';
import Page from '../../src/components/Page';
import Head from 'next/head';

const useStyles = makeStyles(theme => ({
  permalink: {
    padding: theme.spacing(10),
    'text-align': 'center'
  },
  wrap: {
    display: 'inline-block',
    border: '1px solid #999',
    margin: 'auto'
  }
}));

// Not a huge fan of multiple components in the same file.
// See my question at: https://spectrum.chat/?t=d9eac407-02bd-4823-a7b7-8e8185c573ea
function ArtworkPageContent({ artwork }) {
  let classes = useStyles();
  return (
    <div className={classes.permalink}>
      <div className={classes.wrap}>
        <Photo artwork={artwork} />
      </div>
    </div>
  );
}

ArtworkPageContent.propTypes = {
  artwork: PropTypes.object
};

export default class ArtworkPage extends React.Component {
  static async getInitialProps(ctx) {
    // Get id off query (via <Link as="/artwork?artworkId=..."> and express mapping of params => query)

    let id = ctx.query.artworkId; // Query Params
    //let id = ctx.req.params.id; // Route Params

    // Async load artwork resource
    const res = await axios('https://search.artsmia.org/id/' + id);
    const json = await res.data;

    // The api returns "null" as the body with a 200 status code if an id doesn't exist
    let resourceNotFound = false;
    if (json == null) {
      ctx.res.statusCode = 404; // Tell next.js server to issue a 404 status
      resourceNotFound = true;
    }

    return { artwork: json, resourceNotFound: resourceNotFound };
  }

  render() {
    var { artwork, resourceNotFound } = this.props;

    if (resourceNotFound) {
      return <Page>Could not find artwork</Page>;
    }

    return (
      <Page>
        <Head>
          <title>{artwork.title} Next.js demo</title>
        </Head>

        <ArtworkPageContent artwork={artwork} />
      </Page>
    );
  }
}

ArtworkPage.propTypes = {
  classes: PropTypes.object,
  artwork: PropTypes.object,
  resourceNotFound: PropTypes.bool
};
