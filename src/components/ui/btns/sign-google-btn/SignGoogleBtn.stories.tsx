import SignGoogleBtn from './SignGoogleBtn.tsx';
import { Meta, StoryObj } from '@storybook/react';

export default {
    title: 'Components/Btns/SignGoogleBtn',
    component: SignGoogleBtn,
} as Meta<typeof SignGoogleBtn>;

type Story = StoryObj<typeof SignGoogleBtn>;

export const Button: Story = {
    args: {
        scrollPos: 0,
    },
};
