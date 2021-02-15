import React from 'react'
import OffshoreButton from './Button'

export default {
    title: 'Components/OffshoreButton',
    argTypes: { onClick: { action: 'clicked' } },
}

export const Default = args => <OffshoreButton {...args}  />;
Default.args = {
    label: 'Default',
    color: 'default'
}

export const Primary = args => <OffshoreButton {...args}  />;
Primary.args = {
    label: 'Primary'
}

export const Secondary = args => <OffshoreButton {...args}  />;
Secondary.args = {
    label: 'Secondary',
    color: 'secondary'
}

export const Disabled = args => <OffshoreButton {...args}  />;
Disabled.args = {
    label: 'Disabled',
    disabled: true
}
