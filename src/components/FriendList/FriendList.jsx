import PropTypes from 'prop-types';
import { FriendsList, FriendsListItem, FriendsListItemSpan, FriendsListItemImage } from './FriendList.styled.js';

export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(({ avatar, name, isOnline, id }) => {

        return (
            <FriendsListItem key={id}>
            <FriendsListItemSpan status={isOnline}></FriendsListItemSpan>
            <FriendsListItemImage src={avatar} alt="User avatar" width="48" />
            <p>{name}</p>
          </FriendsListItem>
        );
      })}
    </FriendsList>
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
    )
}