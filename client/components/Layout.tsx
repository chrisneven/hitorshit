import Head from 'next/head';
import Link from 'next/link';
import * as React from 'react';
import styled from 'styled-components';
import { Logo } from './atoms/logo/Logo';
import { PrimaryButton } from './atoms/PrimaryButton';
import OverlayMenu from './molecules/OverlayMenu';

interface Props {
    title?: string;
}

const Layout: React.FunctionComponent<Props> = ({ children, title = 'This is the default title' }) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link href="https://fonts.googleapis.com/css?family=Raleway|Ubuntu|Work+Sans:700" rel="stylesheet" />
        </Head>
        <header>
            <Navigation>
                <LogoWrapper>
                    <Link href="/">
                        <Logo />
                    </Link>
                </LogoWrapper>

                <Links>
                    <Link href="/">
                        <StyledLink>Home</StyledLink>
                    </Link>
                    <Link href="/ranking">
                        <StyledLink>Top 10</StyledLink>
                    </Link>
                    <Link href="/hello">
                        <StyledLink>Hello</StyledLink>
                    </Link>
                    <Link href="/register">
                        <StyledLink>Register</StyledLink>
                    </Link>
                    <Link href="/sign-in">
                        <StyledLink>Sign in</StyledLink>
                    </Link>
                </Links>
                <Profile>
                    <PrimaryButton variant={'light'}>Get Started</PrimaryButton>
                    <OverlayMenu />
                </Profile>
            </Navigation>
        </header>
        <Container>{children}</Container>
        <footer>
            <hr />
            <span>I'm here to stay (Footer)</span>
        </footer>
    </div>
);

export default Layout;

const Container = styled.div`
    margin-top: 7.2rem;
    /* padding: 0 10rem; */
`;

const LogoWrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Navigation = styled.div`
    width: 100%;
    background: white;
    position: fixed;
    z-index: 1;
    top: 0px;
    height: 7.2rem;
    align-items: center;
    display: grid;
    grid-template-columns: 1.5fr 4.5fr 1.5fr;
    overflow: hidden;
`;
const Links = styled.nav`
    height: 100%;
    display: flex;
    justify-content: space-between;
    width: 60%;
`;

const Profile = styled.div`
    /* width: 15%; */
    margin-left: auto;
    display: flex;
    flex-direction: row;
    height: 100%;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
`;

const StyledLink = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bolder;
    cursor: pointer;
    position: relative;
    :hover {
        ::after {
            position: absolute;
            opacity: 1;
            content: '';
            left: 50% - 1rem;
            bottom: 0;
            z-index: 1;
            height: 1rem;
            width: 1rem
            border-radius: 50%;

            transition: all 0.25s;

            background: ${({ theme }) => theme.colors.primary.sinaas};
        }
    }
`;
