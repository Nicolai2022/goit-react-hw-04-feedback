import PropTypes from 'prop-types';
import { NotificationTitle } from 'components/Notification/Notification.styled';

const Notification = ({ message }) => {
  return <NotificationTitle>{message}</NotificationTitle>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
