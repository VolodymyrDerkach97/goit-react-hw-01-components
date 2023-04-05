import PropTypes from 'prop-types';
import {
  ProfileContainer,
  Img,
  StatsList,
  StatsListItem,
} from './Profile.styled';

const Profile = ({
  userName,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => {
  return (
    <ProfileContainer>
      <div className="description">
        <Img src={avatar} alt="User avatar" />
        <p className="name">{userName}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <StatsList>
        <StatsListItem>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </StatsListItem>
        <StatsListItem>
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </StatsListItem>
        <StatsListItem>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </StatsListItem>
      </StatsList>
    </ProfileContainer>
  );
};
export default Profile;

Profile.propTypes = {
  userName: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
