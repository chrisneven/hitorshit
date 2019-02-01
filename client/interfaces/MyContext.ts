import { ApolloClient, NormalizedCacheObject } from 'apollo-boost';
import { NextContext } from 'next';

export interface MyContext<T extends object> extends NextContext<{} & T> {
    apolloClient: ApolloClient<NormalizedCacheObject>;
}
