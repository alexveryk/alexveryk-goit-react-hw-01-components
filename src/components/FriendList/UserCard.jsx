import PropTypes from 'prop-types';
import { Item } from './FriendList.styled';
import { UserName } from './FriendList.styled';
import { Status } from './FriendList.styled';
import { isOnline } from './onlineStatus';

export const UserCard = ({ list }) => {
  return (
    <>
      <Item>
        <Status style={{ backgroundColor: isOnline(list.isOnline) }}>
          {list.isOnline}
        </Status>
        <img
          className="avatar"
          src={list.avatar}
          alt="User avatar"
          width="48"
        />
        <UserName>{list.name}</UserName>
      </Item>
    </>
  );
};

UserCard.propTypes = {
  list: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
