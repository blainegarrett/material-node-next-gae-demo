import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from './modal';

const useStyles = makeStyles(theme => {
  return {
    list: {
      padding: theme.spacing(6),
      'text-align': 'center'
    },
    photopermalink: {
      display: 'inline-block'
    },
    photo: {
      display: 'inline-block',
      'text-align': 'center'
    },

    photoLink: {
      verticalAlign: 'middle',
      cursor: 'pointer',
      background: '#eee',
      display: 'inline-block',
      width: theme.artworkListSize,
      height: theme.artworkListSize,
      lineHeight: theme.artworkListSize,
      margin: theme.spacing(2),
      border: '2px solid transparent',
      backgroundPosition: '50% 50%',
      backgroundSize: 'cover'
    }
  };
});

function selectArtworkById(id, artworks) {
  // Helper method to filter results list down to a single target artwork
  let results = artworks.filter(artwork => {
    return artwork._source.id == id;
  });
  return results[0]._source;
}

export default function ArtList({ router, artworks, showArtwork }) {
  let classes = useStyles();

  return (
    <div className={classes.list}>
      {router.query.showModal && (
        <Modal
          artwork={selectArtworkById(router.query.showModal, artworks)}
          onDismiss={() => {
            router.push('/');
          }}
        />
      )}
      {artworks &&
        artworks.length > 0 &&
        artworks.map(artwork => {
          let id = artwork._source.id;
          return (
            <div key={id} className={classes.photo}>
              <a
                title={artwork._source.title}
                className={classes.photoLink}
                href={`/artwork/${id}`}
                onClick={e => showArtwork(e, id)}
                style={{
                  backgroundImage: `url('https://1.api.artsmia.org/${id}.jpg')`
                }}
              />
            </div>
          );
        })}
    </div>
  );
}

ArtList.propTypes = {
  router: PropTypes.any,
  artworks: PropTypes.any,
  showArtwork: PropTypes.func
};
