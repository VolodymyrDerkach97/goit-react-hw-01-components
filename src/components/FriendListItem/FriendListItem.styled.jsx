import styled from '@emotion/styled';

export const StatsListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: start

  padding: 5px;
  height: 50px;
  width: 50px;

  box-shadow: 2px 2px 2px;
  width:250px;
`;

export const IsOnlineIndicator = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 5px;

  background-color: ${({ isOnline, theme }) => {
    switch (isOnline) {
      case true:
        return theme.colors.green;
      case false:
        return theme.colors.red;

      default:
        return theme.colors.white;
    }
  }};
`;
