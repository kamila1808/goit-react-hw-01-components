import PropTypes from 'prop-types';
import {FriendsListItem, FriendsListItemSpan, FriendsListItemImage} from "./FriendListItem.styled"

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <FriendsListItem  key={id}>
      <FriendsListItemSpan status={isOnline}></FriendsListItemSpan>
      <FriendsListItemImage src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </FriendsListItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};