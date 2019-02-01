import styled from 'styled-components';
import { ThemeInterface } from '../constants/theme';

interface Props {
    variant: 'light' | 'dark';
}
const SubTitle = styled.h1<Props>`
    font: ${({ theme }) => (theme as ThemeInterface).fonts.title};
    color: ${({ theme, variant }) => (variant === 'dark' ? (theme as ThemeInterface).colors.dark.muddy : 'white')};
    /* font-size: 7.2rem; */
    line-height: 7.2rem;
    margin: 1rem 0;
    padding: 0;
    > strong {
        color: ${({ theme }) => (theme as ThemeInterface).colors.dark.muddy};
        margin: 0;
        padding: 0;
        font: inherit;
        position: relative;
        text-decoration: underline solid ${({ theme }) => theme.colors.primary.sinaas} !important;
    }
`;

export default SubTitle;
