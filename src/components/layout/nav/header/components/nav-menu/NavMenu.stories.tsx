import NavMenu from './NavMenu.tsx';
import { Meta, StoryObj } from '@storybook/react';

export default {
    title: 'Components/NavMenu',
    component: NavMenu,
    args: {
        scrollPos: 0,
    },
} as Meta<typeof NavMenu>;

type Story = StoryObj<typeof NavMenu>;

export const Default: Story = {};
