export interface ThemeInterface {
    colors: {
        primary: {
            spaceman: string;
            sinaas: string;
            waterspout: string;
            azureish: string;
            border: string;
        };
        dark: {
            registrationBlack: string;
            muddy: string;
            haze: string;
            dim: string;
            wood: string;
        };
        light: {
            lavendar: string;
            flash: string;
            snow: string;
            white: string;
        };
        danger: {
            fire: string;
            rose: string;
            lightrose: string;
        };
        secondary: {
            curry: string;
            india: string;
            teal: string;
            platinum: string;
        };
    };
    fonts: {
        title: string;
        subtitle: string;
        body: string;
    };
    mediaQueries: {
        xs: string;
        s: string;
        m: string;
        l: string;
        xl: string;
        xxl: string;
    };
    mediaQueriesValues: {
        xs: number;
        s: number;
        m: number;
        l: number;
        xl: number;
        xxl: number;
    };
    maxWidths: {
        xs: string;
        s: string;
        m: string;
        l: string;
        xl: string;
        xxl: string;
    };
}

const theme: ThemeInterface = {
    colors: {
        primary: {
            spaceman: '#D6568B',
            sinaas: '#FF9800',
            waterspout: '#FCB853',
            azureish: '#FFD391',
            border: 'rgba(238, 242, 243, 0.1)'
        },
        dark: {
            registrationBlack: '#000000',
            muddy: '#2F4858',
            haze: '#4A5783',
            dim: '#61696f',
            wood: '#B9A89A'
        },
        light: {
            lavendar: '#D1D1D1',
            flash: '#DFE0DF',
            snow: '#FFF7EF',
            white: '#ffffff'
        },
        danger: {
            fire: '#f91c16',
            rose: '#df1711',
            lightrose: '#ffd3d3'
        },
        secondary: {
            curry: '#BD9D00',
            india: '#789B00',
            teal: '##1C9216',
            platinum: '#007560'
        }
    },
    fonts: {
        title: '500 3.2rem/3.2rem Uniform, sans-serif',
        subtitle: '500 3.2rem/3.2rem Uniform, sans-serif',
        body: '400 1.4rem/2.4rem Uniform, sans-serif'
    },
    mediaQueries: {
        xs: '480px',
        s: '768px',
        m: '992px',
        l: '1200px',
        xl: '1440px',
        xxl: '1660px'
    },
    mediaQueriesValues: {
        xs: 400,
        s: 768,
        m: 992,
        l: 1200,
        xl: 1440,
        xxl: 1660
    },
    maxWidths: {
        xs: '464',
        s: '636',
        m: '960',
        l: '1152',
        xl: '1344',
        xxl: '1440'
    }
};
export default theme;

const size = {
    xs: '480px',
    s: '768px',
    m: '992px',
    l: '1200px',
    xl: '1440px',
    xxl: '1660px'
};
export const device = {
    xs: `(min-width: ${size.xs})`,
    s: `(min-width: ${size.s})`,
    m: `(min-width: ${size.m})`,
    l: `(min-width: ${size.l})`,
    xl: `(min-width: ${size.xl})`,
    xxl: `(min-width: ${size.xxl})`
};
