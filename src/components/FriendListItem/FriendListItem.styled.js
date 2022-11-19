import styled from 'styled-components';

export const FriendsListItem = styled.li`
  display: flex;
  margin-bottom: 30px;
  align-items: center;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
  margin: 5px;
`;

export const FriendsListItemSpan = styled.span`
  margin-left: 5px;
  margin-right: 10px;
  background-color: ${({status}) => status ? "green" : "red"};
  width: 13px;
  height: 13px;
  border-radius: 50%;
`;

export const FriendsListItemImage = styled.img`
border-radius: 50%;
  border: 1px solid rgba(34, 60, 80, 0.2);
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  margin-right: 10px;
  padding: 5px;
`;

