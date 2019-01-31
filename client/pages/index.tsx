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
                    <Title>
                        <strong>Judge</strong> songs and let your songs be <strong>judged</strong>.
                    </Title>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt ex debitis tempora nesciunt,
                        illo ipsa esse explicabo! Accusantium iusto neque consequatur odio ut, expedita dignissimos
                        nihil harum praesentium veniam <strong> voluptate</strong>. Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Incidunt ex debitis tempora nesciunt, illo ipsa esse explicabo!
                        Accusantium iusto neque consequatur odio ut, expedita dignissimos nihil harum praesentium veniam
                        voluptate.
                    </p>
                    <PrimaryButton>Start now!</PrimaryButton>
                </Left>
                <Right />
            </Header>
            <h1>Top 5 tracks</h1>
            <Content>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt ex debitis tempora nesciunt, illo
                ipsa esse explicabo! Accusantium iusto neque consequatur odio ut, expedita dignissimos nihil harum
                praesentium veniam voluptate.
            </Content>
            <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt ex debitis tempora nesciunt, illo
                ipsa esse explicabo! Accusantium iusto neque consequatur odio ut, expedita dignissimos nihil harum
                praesentium veniam voluptate.
            </div>
            <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt ex debitis tempora nesciunt, illo
                ipsa esse explicabo! Accusantium iusto neque consequatur odio ut, expedita dignissimos nihil harum
                praesentium veniam voluptate.
            </div>
            <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt ex debitis tempora nesciunt, illo
                ipsa esse explicabo! Accusantium iusto neque consequatur odio ut, expedita dignissimos nihil harum
                praesentium veniam voluptate.
            </div>
        </Layout>
    );
};

export default IndexPage;
const Content = styled.div`
    height: 100vh;
`;

const Header = styled.div`
    width: 100%;
    height: calc(100vh - 7.2rem);
    /* background-image: url('/static/header.jpeg'); */

    display: flex;
`;

const Left = styled.div`
    padding: 10rem;
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Right = styled.div`
    background-image: url('https://images.unsplash.com/photo-1421878512040-134f5e04e971?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9');
    background-repeat: none;
    background-size: cover;
    width: 40%;
`;
