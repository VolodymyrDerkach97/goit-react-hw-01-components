import styled from '@emotion/styled';

export const StatsList = styled.ul`
    padding: 0;
    margin: 0 0;
    width: 250px;
    list-style: none;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.white};
}
`;
