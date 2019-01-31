import styled from 'styled-components';

export const PrimaryButton = styled.button`
    margin: 0;
    padding: 0;
    width: 15rem;
    min-height: 4.4rem;
    border-radius: 3rem;
    background: ${({ theme }) => theme.colors.primary.sinaas};
    font: inherit;
    color: white;
    font-weight: bold;
    border-style: none;
    outline: none;
    text-transform: uppercase;
    transition: all 0.25s;
    font-size: 0.8em;
    :hover {
        background: ${({ theme }) => theme.colors.primary.orangebrown};
        transform: scale(1.04);
    }
`;
