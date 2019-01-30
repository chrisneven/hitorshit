import App, { Container } from 'next/app';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'styled-components';
import theme from '../components/constants/theme';
import { GlobalStyles } from '../globalStyling';
import withApollo from '../lib/withApollo';

class MyApp extends App<any> {
    render() {
        const { Component, pageProps, apolloClient } = this.props;
        return (
            <Container>
                <ThemeProvider theme={theme}>
                    <ApolloProvider client={apolloClient}>
                        <GlobalStyles />
                        <Component {...pageProps} />
                    </ApolloProvider>
                </ThemeProvider>
            </Container>
        );
    }
}

export default withApollo(MyApp);
