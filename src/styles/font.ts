import { css } from '@emotion/react';

const Font = css`
    @font-face {
        font-family: NotoSans;
        font-style: normal;
        font-weight: 400;
        src: url('../assets/font/NotoSans-Regular.woff2') format('woff2'),
        url('../assets/font/NotoSans-Regular.woff') format('woff'),
        url('../assets/font/NotoSans-Regular.ttf') format('truetype');
        font-display: swap;
    }
    @font-face {
        font-family: NotoSans;
        font-style: normal;
        font-weight: 700;
        src: url('../assets/font/NotoSans-Bold.woff2') format('woff2'),
        url('../assets/font/NotoSans-Bold.woff') format('woff');
    url('../assets/font/NotoSans-Bold.ttf') format('truetype');
        font-display: swap;

`;

export default Font;
