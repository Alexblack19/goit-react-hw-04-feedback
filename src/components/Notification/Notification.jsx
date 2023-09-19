import PropTypes from 'prop-types';
import Notiflix from 'notiflix';

export function Notification({ message }) {
  return Notiflix.Notify.info(message, {
    position: 'center-center',
    fontSize: '16px',        
  });
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
