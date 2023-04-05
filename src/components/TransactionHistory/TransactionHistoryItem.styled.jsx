import styled from '@emotion/styled';

export const Table = styled.table`
  text-align: center;
  width: 400px;

  background-color: ${({ theme }) => theme.colors.blue};
`;
export const HeaderTable = styled.thead`
  color: white;
  background-color: ${({ theme }) => theme.colors.indigo};
`;
