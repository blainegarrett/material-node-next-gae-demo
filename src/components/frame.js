import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  sidebarList: {
    'list-style-type': 'none',
    margin: 0,
    padding: 0,
    'text-align': 'center'
  },
  sidebar: {
    'float': 'right',
    'background': '#fff',
    'width': '250px',
    'height': '500px',
    'text-align': 'left',
    'box-sizing': 'border-box',
    'padding': theme.spacing.unit,
    'font-size': '11px',
    'font-family': 'Monaco',
  }
});

const Frame = ({ classes, artwork }) => {
  let id = artwork.id;

  return (
    <div className='photo'>
      <div className='image'></div>

      <div className={classes.sidebar}>
        <ul className={classes.sidebarList}>
          <li>
            <h3>{ artwork.title }</h3>
            <p>{ artwork.artist }</p>

            <Button target="_new" href={'https://collections.artsmia.org/art/' + id } component="a" variant="contained" color="primary">
              View on Mia Site
            </Button>
          </li>
        </ul>
      </div>

      <style jsx>{`
        .photo {
          width: 100%;
          overflow: hidden;
          height: 500px;
          display: inline-block;
        }

        .image {
          float: left;
          width: 550px;
          height: 500px;
          background: #333;
          color: #fff;
          text-align: center;
          vertical-align: middle;
          line-height: 500px;
          font-size: 40px;
          background-image: url('https://1.api.artsmia.org/${id}.jpg');
          background-position: 50% 50%;
          background-size: contain;
          background-repeat:no-repeat
        }
      `}</style>
    </div>);
};

Frame.propTypes = {
  classes: PropTypes.object,
  artwork: PropTypes.object
};

//export default withRoot(withStyles(styles)(Frame));
export default withStyles(styles)(Frame);
