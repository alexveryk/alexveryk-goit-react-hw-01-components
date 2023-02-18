import PropTypes from 'prop-types';
import { List } from './FriendList.styled';
import { Item } from './FriendList.styled';
import { UserName } from './FriendList.styled';
import { Status } from './FriendList.styled';
import { isOnline } from './onlineStatus';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(friend => {
        return (
          <Item key={friend.id}>
            <Status style={{ backgroundColor: isOnline(friend.isOnline) }}>
              {friend.isOnline}
            </Status>
            <img
              className="avatar"
              src={friend.avatar}
              alt="User avatar"
              width="48"
            />
            <UserName>{friend.name}</UserName>
          </Item>
        );
      })}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
