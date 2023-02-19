import PropTypes from 'prop-types';
import { List } from './FriendList.styled';
import { UserCard } from './UserCard';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(friend => {
        return <UserCard key={friend.id} list={friend} />;
      })}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
