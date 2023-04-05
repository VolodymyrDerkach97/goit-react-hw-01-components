import styled from '@emotion/styled';

export const StatsListItem = styled.li`
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 5px;
  height: 50px;
  width: 50px;

  background-color: ${getRandomHexColor};
`;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
