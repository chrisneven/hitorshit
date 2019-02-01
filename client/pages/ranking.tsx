import faker from 'faker';
import * as React from 'react';
import styled from 'styled-components';
import SubTitle from '../components/atoms/SubTitle';
import { ThemeInterface } from '../components/constants/theme';
import Layout from '../components/Layout';
export default () => {
    return (
        <Layout title={'Register'}>
            <SubTitle variant={'dark'}>Top 10 songs</SubTitle>

            {Array.from(Array(10)).map((_, i) => (
                <Track key={i}>
                    <Rank>#{i + 1}</Rank>
                    <Details>
                        <Detail>
                            <Label>Track</Label>
                            <h2>{faker.lorem.sentence(undefined, 5)}</h2>
                        </Detail>
                        <Detail>
                            <Label>Artist</Label>
                            <h2>{faker.name.firstName()}</h2>
                        </Detail>
                        <Detail>
                            <Label>Length</Label>
                            <h2>{faker.random.number(160)}</h2>
                        </Detail>
                    </Details>
                </Track>
            ))}
        </Layout>
    );
};
const Label = styled.div`
    color: ${({ theme }) => (theme as ThemeInterface).colors.light.lavendar};
`;

const Details = styled.div`
    display: flex;
`;

const Detail = styled.div`
    height: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-right: 2rem;
    > h2 {
        margin: 0;
        padding: 0;
    }
`;
const Track = styled.div`
    cursor: pointer;
    height: 8rem;
    background: white;
    width: 60%;
    /* padding: 1rem; */
    display: grid;
    grid-template-columns: 1fr 11fr;
    padding: 1rem;

    :hover {
        background: ${({ theme }) => theme.colors.light.snow};
    }
`;

const Rank = styled.div`
    color: white;
    background: ${({ theme }) => theme.colors.primary.sinaas};
    height: 6rem;
    width: 6rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font: 500 3.2rem/3.2rem Work Sans, sans-serif;
`;
