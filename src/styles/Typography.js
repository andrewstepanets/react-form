import { createGlobalStyle } from 'styled-components';

import playFairRegular from '../assets/fonts/PlayfairDisplay-Regular.ttf';
import playFairItalic from '../assets/fonts/PlayfairDisplay-Italic.ttf';
import playFairBoldItalic from '../assets/fonts/PlayfairDisplay-BoldItalic.ttf';
import playFairBold from '../assets/fonts/PlayfairDisplay-Bold.ttf';

const Typography = createGlobalStyle`
    @font-face {
        font-family: FrenchFries;
        src: url(${playFairRegular});
    }
    @font-face {
        font-family: FrenchFries;
        src: url(${playFairItalic});
    }
    @font-face {
        font-family: FrenchFries;
        src: url(${playFairBoldItalic});
    }
    @font-face {
        font-family: FrenchFries;
        src: url(${playFairBold});
    }
`;

export default Typography;