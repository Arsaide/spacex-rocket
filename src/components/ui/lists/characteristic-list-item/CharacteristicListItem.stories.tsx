import { Meta, StoryObj } from '@storybook/react';
import CharacteristicListItem from './CharacteristicListItem.tsx';

export default {
    title: 'Components/ListItem/CharacteristicItem',
    component: CharacteristicListItem,
} as Meta<typeof CharacteristicListItem>;

type Story = StoryObj<typeof CharacteristicListItem>;

export const ListItem: Story = {
    args: {
        label: 'Label',
        values: '100 km / 100 m',
    },
};
