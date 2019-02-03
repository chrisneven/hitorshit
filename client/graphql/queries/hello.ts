import gql from 'graphql-tag';

export const helloQuery = gql`
    query Hello {
        hello
    }
`;
