import styled from 'styled-components';
import { ThemeInterface } from '../constants/theme';

const Title = styled.h1`
    font: ${({ theme }) => (theme as ThemeInterface).fonts.title};
    color: white;
    font-size: 7.2rem;
    line-height: 7.2rem;
    font-weight: bold;
    text-shadow: 2px 2px 2px #7d7d7d;
`;

export default Title;
