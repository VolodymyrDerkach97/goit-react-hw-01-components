import styled from '@emotion/styled';

export const Section = styled.section`
  margin-top: 15px;
  width: 250px;
  text-align: center;
  border-radius: 5%;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const StatsList = styled.ul`
    padding: 0;
    margin: 0 0;
    list-style: none;
    display: flex;
}
`;
