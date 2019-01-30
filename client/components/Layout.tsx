import Head from 'next/head';
import Link from 'next/link';
import * as React from 'react';
import styled from 'styled-components';
import { Logo } from './atoms/logo/Logo';
import { PrimaryButton } from './atoms/PrimaryButton';
import ProfilePic from './atoms/ProfilePic';

interface Props {
    title?: string;
}

const Layout: React.FunctionComponent<Props> = ({ children, title = 'This is the default title' }) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link href="https://fonts.googleapis.com/css?family=Raleway|Ubuntu" rel="stylesheet" />
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
                    <ProfilePic />
                </Profile>
            </Navigation>
        </header>

        {children}
        <footer>
            <hr />
            <span>I'm here to stay (Footer)</span>
        </footer>
    </div>
);

export default Layout;

const LogoWrapper = styled.div`
    height: 100%;
    background: #161616;
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
`;
const Links = styled.nav`
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: space-between;
`;

const Profile = styled.div`
    width: 25%;
    margin-left: auto;
    display: flex;
    flex-direction: row;
    height: 100%;
    justify-content: space-evenly;
    align-items: center;
`;

const StyledLink = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bolder;
    cursor: pointer;

    :active {
        background: red;
    }
`;
