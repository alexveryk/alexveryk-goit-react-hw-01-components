import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  width: 240px;
  padding-top: 20px;
  border: 1px solid grey;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

export const Avatar = styled.img`
  width: 100px;
`;

export const Username = styled.p`
  font-weight: 700;
  margin-bottom: 10px;
`;

export const Tag = styled.p`
  color: gray;
  margin-bottom: 10px;
`;

export const Location = styled.p`
  color: gray;
  margin-bottom: 10px;
`;

export const Stats = styled.ul`
  list-style: none;
  display: flex;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 80px;
  padding: 20px 0;

  background-color: #e9e9e9;
`;

export const Label = styled.span`
  color: grey;
`;

export const Quantity = styled.span`
  color: black;
  font-weight: 700;
`;
