import NavProfile from './NavProfile.tsx';
import { Meta, StoryObj } from '@storybook/react';
import { useAuthStore } from '../../../../../../api/store/AuthStore.ts';

export default {
    title: 'Components/NavProfile',
    component: NavProfile,
} as Meta<typeof NavProfile>;

type Story = StoryObj<typeof NavProfile>;

export const Default: Story = {
    render: () => {
        useAuthStore.setState({
            user: {
                name: 'Kirill Testovich',
                email: 'testkirill@test.com',
                picture: 'https://test.com',
            },
        });

        return <NavProfile />;
    },
};
