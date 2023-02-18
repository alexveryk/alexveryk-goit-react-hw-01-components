import styled from '@emotion/styled';

export const Table = styled.table`
  width: 600px;
  border: 1px solid grey;
  margin-bottom: 30px;
  box-shadow: 2px 2px 0px 0px rgb(189 181 175 / 50%);
  border-collapse: collapse;
`;

export const TableTitle = styled.th`
  padding: 12px;
  background-color: #8dd7e8;
  color: white;
`;

export const TableData = styled.td`
  padding: 12px;
  text-align: center;
  color: grey;
`;

export const TableRow = styled.tr`
  background-color: #fafafa;
    :nth-of-type(even) {
      background-color: #cbd1cd;
    }
  }
`;
