import NavItem from './NavItem.tsx';
import { Meta, StoryObj } from '@storybook/react';

export default {
    title: 'Components/NavItem',
    component: NavItem,
    args: {
        color: '#000',
        children: 'Home',
        scrollPos: 0,
    },
} as Meta<typeof NavItem>;

type Story = StoryObj<typeof NavItem>;

export const Default: Story = {
    args: {
        to: '/',
    },
};

export const ExternalLink: Story = {
    args: {
        href: '#about',
    },
};
