import { Meta, StoryObj } from '@storybook/react';
import Header from './Header.tsx';

export default {
    title: 'Components/Header/Main Component',
    component: Header,
} as Meta<typeof Header>;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
    render: () => <Header />,
};
