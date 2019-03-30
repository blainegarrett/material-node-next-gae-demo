import '../src/theming/mui_bootstrap';
import React from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';

import Page from '../src/components/Page';
import ArtList from '../src/components/ArtList';
import { withRouter } from 'next/router';

class Index extends React.Component {
  static async getInitialProps() {
    // Async load 10 known images from Mia's collection
    const res = await axios(
      'https://search.artsmia.org/ids/1355,3291,109328,127083,67472,2606,18346,1218'
    );
    const json = await res.data;
    return { artworks: json.hits.hits };
  }

  constructor(props) {
    super(props);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  // handling escape close
  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown(e) {
    if (!this.props.router.query.showModal) return;
    if (e.keyCode === 27) {
      this.props.router.back();
    }
  }

  showArtwork(e, id) {
    e.preventDefault();
    this.props.router.push(`/?showModal=${id}`, `/artwork/${id}`);
  }

  render() {
    const { router, artworks } = this.props;

    return (
      <Page>
        <Head>
          <title>Next.js demo</title>
        </Head>

        <h2>Lightbox Links</h2>
        <ArtList
          artworks={artworks}
          router={router}
          showArtwork={this.showArtwork.bind(this)}
        />

        <h2>Direct Links</h2>
        <ul>
          {artworks &&
            artworks.length > 0 &&
            artworks.map(artwork => {
              let id = artwork._source.id;
              return (
                <li key={id}>
                  <Link as={`/artwork/${id}`} href={`/artwork?artworkId=${id}`}>
                    <a title={artwork._source.title} className="permalink">
                      {artwork._source.title}
                    </a>
                  </Link>
                </li>
              );
            })}

          <li>
            <a href="/does-not-exist">404 example</a> (Unmatched Route)
          </li>
          <li>
            <a href="/artwork/asdf1234">404 example</a> (Matched Route but
            matching data not exist)
          </li>
        </ul>
      </Page>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object,
  router: PropTypes.any,
  artworks: PropTypes.array
};

export default withRouter(Index);
