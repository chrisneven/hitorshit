import styled from 'styled-components';
import { ThemeInterface } from '../constants/theme';

const Title = styled.h1`
    font: ${({ theme }) => (theme as ThemeInterface).fonts.title};
    color: ${({ theme }) => (theme as ThemeInterface).colors.primary.sinaas};
`;

export default Title;
