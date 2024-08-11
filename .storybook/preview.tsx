import type { Preview } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import '../src/global.scss';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        Story => (
            <BrowserRouter>
                <Story />
            </BrowserRouter>
        ),
    ],
};

export default preview;
