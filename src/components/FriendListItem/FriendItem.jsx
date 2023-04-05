import PropTypes from 'prop-types';
import { StatsListItem, IsOnlineIndicator } from './FriendListItem.styled';

const FriendItem = ({ name, avatar, isOnline }) => {
  return (
    <StatsListItem>
      <IsOnlineIndicator isOnline={isOnline}></IsOnlineIndicator>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </StatsListItem>
  );
};
export default FriendItem;

FriendItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
