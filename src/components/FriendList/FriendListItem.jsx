import PropTypes from 'prop-types';

import FriendListItem from '../FriendListItem';

import { StatsList } from './FriendList.styled';

const FriendList = ({ friends }) => {
  return (
    <StatsList>
      {friends.map(friend => {
        return <FriendListItem key={friend.id} {...friend} />;
      })}
    </StatsList>
  );
};

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
