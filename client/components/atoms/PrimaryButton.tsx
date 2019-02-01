import styled from 'styled-components';

export const PrimaryButton = styled.button<{ variant?: 'dark' | 'light' | 'secondary' }>`
    margin: 0;
    padding: 0;
    width: 15rem;
    min-height: 4.4rem;
    border-radius: 3rem;
    border-style: none;
    background: ${({ theme, variant }) =>
        variant === 'dark' ? theme.colors.dark.muddy : variant === 'light' ? theme.colors.primary.sinaas : 'none'};

    border: ${({ variant }) => (variant === 'secondary' ? `2px solid white ` : 'none')};
    font: inherit;
    color: white;
    font-weight: bolder;
    outline: none;
    text-transform: uppercase;
    transition: all 0.25s;
    font-size: 0.8em;
    :hover {
        background: ${({ theme, variant }) =>
            variant === 'dark' ? theme.colors.dark.haze : variant === 'light' ? theme.colors.primary.orangebrown : ''};
        transform: scale(1.02);
    }
`;
