import styled from 'styled-components';

export const PrimaryButton = styled.button`
    margin: 0;
    padding: 0;
    width: 15rem;
    height: 4.4rem;
    border-radius: 3rem;
    background: ${({ theme }) => theme.colors.primary.sinaas};
    font: inherit;
    color: white;
    border-style: none;
    outline: none;
    text-transform: uppercase;
    transition: all 0.25s;
    font-size: 0.8em;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover {
        background: ${({ theme }) => theme.colors.primary.orangebrown};
        transform: scale(1.04);
    }
`;
