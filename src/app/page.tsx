'use client';

import {styleReset} from 'react95';
import {createGlobalStyle, ThemeProvider, StyleSheetManager} from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';

import original from 'react95/dist/themes/original';

import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';

import WelcomePage from "@/app/welcome/page";

const GlobalStyles = createGlobalStyle`
    ${styleReset}

    @font-face {
        font-family: 'ms_sans_serif';
        src: url('${ms_sans_serif}') format('woff2');
        font-weight: 400;
        font-style: normal
    }

    @font-face {
        font-family: 'ms_sans_serif';
        src: url('${ms_sans_serif_bold}') format('woff2');
        font-weight: bold;
        font-style: normal
    }

    body, input, select, textarea {
        font-family: 'ms_sans_serif', serif;
    }
`;

export default function Home() {
    return (
        <div>
            <StyleSheetManager shouldForwardProp={isPropValid}>
                <GlobalStyles/>
                <ThemeProvider theme={original}>
                    <WelcomePage/>
                </ThemeProvider>
            </StyleSheetManager>
        </div>
    )
}
