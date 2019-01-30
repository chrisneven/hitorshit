import Document from 'next/document';
import { createGlobalStyle, ServerStyleSheet } from 'styled-components';
import Typography from 'typography';
import oceanBeachTheme from 'typography-theme-ocean-beach';

export default class MyDocument extends Document {
    static async getInitialProps(ctx: any) {
        const sheet = new ServerStyleSheet();
        const typography = new Typography(oceanBeachTheme);
        const GlobalStyle = createGlobalStyle`body {
            ${typography.createStyles()}
            }
          `;
        const originalRenderPage = ctx.renderPage;
        ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: (App: any) => (props: any) => sheet.collectStyles(<App {...props} />)
            });

        const initialProps = await Document.getInitialProps(ctx);
        return {
            ...initialProps,
            // @ts-ignore
            styles: [...initialProps.styles, ...sheet.getStyleElement()]
        };
    }
}
