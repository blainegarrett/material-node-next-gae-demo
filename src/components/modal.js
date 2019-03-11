import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import Photo from './frame';

export default class Modal extends React.Component {
  dismiss () { this.props.onDismiss(); }

  render () {
    return (
      <Dialog onClose={this.dismiss.bind(this)} open={true} maxWidth="md">
        <Photo artwork={this.props.artwork} />
      </Dialog>
    );
  }
}

Modal.propTypes = {
  artwork: PropTypes.object,
  onDismiss: PropTypes.func
};
