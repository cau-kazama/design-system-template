import { ComponentMeta, Story } from '@storybook/react';

import <FTName> from './index';

export default {
    title: '<FTName>',
    component: <FTName>
} as ComponentMeta<typeof <FTName>>;

export const Default: Story = (args) => (
    <<FTName> {...args} />
);
