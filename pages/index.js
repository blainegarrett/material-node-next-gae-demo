import React from 'react';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import 'isomorphic-unfetch';
import Head from 'next/head';
import Link from 'next/link';

import Page from '../src/components/Page';
import Modal from '../src/components/modal';

const styles = (theme) => {
  return {
    list: {
      'padding': theme.spacing.unit * 6,
      'text-align': 'center'
    },
    photopermalink: {
      'display': 'inline-block'
    },
    photo: {
      display: 'inline-block',
      'text-align':'center'
    },

    photoLink: {
      verticalAlign: 'middle',
      cursor: 'pointer',
      background: '#eee',
      display: 'inline-block',
      width: '250px',
      height: '250px',
      lineHeight: '250px',
      margin: theme.spacing.unit * 2,
      border: '2px solid transparent',
      backgroundPosition: '50% 50%',
      backgroundSize: 'cover',
    }
  };
};

class Index extends React.Component {
  static async getInitialProps () {
    // Async load 10 known images from Mia's collection
    const res = await fetch('https://search.artsmia.org/ids/1355,3291,109328,127083,67472,2606,18346,1218');
    const json = await res.json();
    return { artworks: json.hits.hits };
  }

  constructor (props) {
    super(props);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  // handling escape close
  componentDidMount () {
    document.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown (e) {
    if (!this.props.router.query.showModal) return;
    if (e.keyCode === 27) {
      this.props.router.back();
    }
  }

  dismissModal () {
    this.props.router.push('/');
  }

  showArtwork (e, id) {
    e.preventDefault();
    this.props.router.push(`/?showModal=${id}`, `/artwork/${id}`);
  }

  selectArtworkById(id) {
    let results = this.props.artworks.filter((artwork) => { return artwork._source.id == id; });
    return results[0]._source;
  }

  render () {

    const { classes, router, artworks } = this.props;

    return (
      <Page>
        <Head>
          <title>Next.js demo</title>
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>

        <h2>Lightbox Links</h2>

        <div className={classes.list}>
          {
            router.query.showModal &&
              <Modal
                artwork={this.selectArtworkById(router.query.showModal)}
                onDismiss={() => this.dismissModal()}
              />
          }
          {
            artworks.map((artwork) => {
              let id = artwork._source.id;
              return (
                <div key={id} className={classes.photo}>
                  <a
                    className={classes.photoLink}
                    href={`/artwork/${id}`}
                    onClick={(e) => this.showArtwork(e, id)}
                    style={{backgroundImage: `url('https://1.api.artsmia.org/${id}.jpg')`}}
                  >
                  </a>
                </div>
              );
            })
          }
        </div>

        <h2>Direct Links</h2>
        {
          artworks.map((artwork) => {
            let id = artwork._source.id;
            return (
              <li key={id}><Link as={`/artwork/${id}`} href={`/artwork?artworkId=${id}`}><a className="permalink">{ artwork._source.title}</a></Link></li>
            );
          })
        }

        <li><a href="/does-not-exist">404 example</a> (Unmatched Route)</li>
        <li><a href="/artwork/asdf1234">404 example</a> (Matched Route but matching data not exist)</li>
      </Page>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object,
  router: PropTypes.any,
  artworks: PropTypes.array
};

export default withStyles(styles)(withRouter(Index));
