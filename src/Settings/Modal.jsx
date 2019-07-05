import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Modal extends PureComponent {
  render() {
    const { onClose, show, children } = this.props;

    if (!show) {
      return null;
    }

    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50,
    };

    const modalStyle = {
      backgroundColor: '#FFDAD8',
      borderRadius: 5,
      maxWidth: 300,
      minHeight: 150,
      position: 'fixed',
      margin: '0 auto',
      padding: 30,
    };

    return (
      <div className="backdrop" style={backdropStyle}>
        <div className="modal" style={modalStyle}>
          {children}
          <div className="footer">
            <button type="button" onClick={onClose}>
              X
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node,
};

Modal.defaultProps = {
  show: true,
  children: null,
};

export default Modal;
