import { FunctionComponent, HTMLAttributes } from 'react';
import styled from 'styled-components';

interface Props {
    variant?: 'light' | 'dark';
}
const MenuIcon: FunctionComponent<HTMLAttributes<HTMLDivElement> & Props> = ({ children, variant, ...props }) => {
    console.log(variant);
    return (
        <Container {...props}>
            {Array.from(Array(4)).map((_, i) => {
                console.log(i);
                return <Dot key={i} variant={variant} />;
            })}
        </Container>
    );
};
export default MenuIcon;

const Dot = styled.div<Props>`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50%;
    ::after {
        content: '';
        bottom: 0;
        height: 5px;
        width: 5px;
        border-radius: 50%;
        background: ${({ theme, variant }) => (variant === 'dark' ? theme.colors.dark.muddy : 'white')}
`;
const Container = styled.div`
    position: relative;
    z-index: 2;
    padding: 2.5rem;
    height: 7.2rem;
    width: 7.2rem;
    display: flex;
    flex-wrap: wrap;
    cursor: pointer;
    transition: all 250ms;
    :hover {
        transform: rotate(90deg);
        border-left: 0.3rem solid ${({ theme }) => theme.colors.primary.sinaas};
        /* border-width: 20%; */
    }
`;
