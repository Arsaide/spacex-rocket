import NavProfile from './NavProfile.tsx';
import { Meta, StoryObj } from '@storybook/react';
import { useAuthStore } from '../../../../../../api/store/AuthStore.ts';
import img from '../../../../../../../public/storybook.jpg';

export default {
    title: 'Components/Header/NavProfile',
    component: NavProfile,
} as Meta<typeof NavProfile>;

type Story = StoryObj<typeof NavProfile>;

export const Default: Story = {
    render: () => {
        useAuthStore.setState({
            user: {
                name: 'Kirill Testovich',
                email: 'testkirill@test.com',
                picture: img,
            },
        });

        return <NavProfile />;
    },
};
