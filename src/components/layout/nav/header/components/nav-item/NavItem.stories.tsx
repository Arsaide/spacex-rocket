import NavItem from './NavItem.tsx';
import { Meta, StoryObj } from '@storybook/react';
import '../../../../../../global.scss';

export default {
    title: 'Components/Header/NavItem',
    component: NavItem,
    args: {
        color: 'rgba(255, 255, 255, 1)',
        children: 'Home',
    },
} as Meta<typeof NavItem>;

type Story = StoryObj<typeof NavItem>;

export const NavLink: Story = {
    args: {
        to: '/',
    },
};

export const HTMLTag: Story = {
    args: {
        href: '#about',
    },
};
