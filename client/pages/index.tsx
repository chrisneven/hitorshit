import * as React from 'react';
import styled from 'styled-components';
import { PrimaryButton } from '../components/atoms/PrimaryButton';
import Title from '../components/atoms/Title';
import Layout from '../components/Layout';

const IndexPage: React.FunctionComponent = () => {
    return (
        <Layout title="Home | Hit Or Shit">
            <Header>
                <Left>
                    <Title>Judge Songs And Get Your Songs Judged</Title>
                    <PrimaryButton>Start now!</PrimaryButton>
                </Left>
                <Right>
                    <Title>HIT 0R SH1T</Title>
                </Right>
            </Header>
            <h1>Top 5 tracks</h1>
        </Layout>
    );
};

export default IndexPage;

const Header = styled.div`
    position: fixed;
    width: 100%;
    height: calc(100vh - 7.2rem);
    background-image: url('/static/header.jpeg');
    background-repeat: none;
    background-size: cover;
    display: flex;
`;

const Left = styled.div`
    padding: 4rem;
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Right = styled.div``;
