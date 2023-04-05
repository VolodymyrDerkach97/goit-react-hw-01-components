import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  margin-top: 15px;
  width: 250px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5%;
`;

export const Img = styled.img`
  border-radius: 50%;
  width: 100px;
`;

export const StatsList = styled.ul`
    border-radius: 5%;
    padding: 25px 10px;
    margin: 0 0;
    list-style: none;
    display: flex;
    background-color: ${({ theme }) => theme.colors.blue};

}
`;

export const StatsListItem = styled.li`
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: center;
`;
