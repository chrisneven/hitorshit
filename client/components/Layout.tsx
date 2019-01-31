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
                    <Link href="/list-fc">
                        <StyledLink>Top 10</StyledLink>
                    </Link>
                    <Link href="/list-class">
                        <StyledLink>List As Class</StyledLink>
                    </Link>
                    <Link href="/about">
                        <StyledLink>About</StyledLink>
                    </Link>
                    <Link href="/register">
                        <StyledLink>Register</StyledLink>
                    </Link>
                </Links>
                <Profile>
                    <PrimaryButton>Get Started</PrimaryButton>
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
`;

const LogoWrapper = styled.div`
    height: 100%;
    background: #1e1e1e;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20%;
`;
const Navigation = styled.div`
    width: 100%;
    background: white;
    position: fixed;
    z-index: 1;
    top: 0px;
    height: 7.2rem;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    overflow: hidden;
    ::after {
        position: absolute;
        opacity: 1;
        content: '';
        left: 20%;
        bottom: 0;
        height: 1px;
        width: 100%;
        transition: all 0.25s;
        background: ${({ theme }) => theme.colors.light.flash};
    }
`;
const Links = styled.nav`
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: space-between;
`;

const Profile = styled.div`
    width: 15%;
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
            bottom: 0;
            z-index: 1;
            height: 0.5rem;
            width: 100%;
            transition: all 0.25s;

            background: ${({ theme }) => theme.colors.primary.sinaas};
        }
    }
`;
