import styled from '@emotion/styled';

export const List = styled.ul`
  width: 300px;
  margin-bottom: 30px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  border: 1px solid grey;
  border-radius: 4px;
  padding: 4px;
  box-shadow: 2px 2px 2px 2px rgb(128 136 144 / 31%);
  margin-bottom: 12px;
`;

export const UserName = styled.p`
  font-size: 24px;
`;

export const Status = styled.span`
  width: 18px;
  height: 18px;
  background-color: red;
  border-radius: 50%;
`;
