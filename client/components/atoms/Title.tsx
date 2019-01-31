import styled from 'styled-components';
import { ThemeInterface } from '../constants/theme';

const Title = styled.h1`
    font: ${({ theme }) => (theme as ThemeInterface).fonts.title};
    color: ${({ theme }) => (theme as ThemeInterface).colors.dark.muddy};
    font-size: 7.2rem;
    line-height: 7.2rem;
    margin: 0;
    padding: 0;
    strong {
    color: ${({ theme }) => (theme as ThemeInterface).colors.dark.muddy};

        margin: 0;
        padding: 0;
        font: inherit;
        position: relative;

        text-decoration: underline solid  ${({ theme }) => theme.colors.primary.sinaas};
        }
    }
`;

export default Title;
