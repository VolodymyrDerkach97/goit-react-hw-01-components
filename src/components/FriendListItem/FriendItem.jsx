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
