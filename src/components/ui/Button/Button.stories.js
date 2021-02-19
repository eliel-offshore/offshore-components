import React from 'react'
import OffshoreButton from './Button'

export default {
    title: 'UI/OffshoreButton',
    argTypes: { onClick: { action: 'clicked' } }
}

export const Default = args => <OffshoreButton {...args}>Default</OffshoreButton>;
Default.args = {
    color: 'default'
}

export const Primary = args => <OffshoreButton {...args}>Primary</OffshoreButton>;
Primary.args = {
}

export const Secondary = args => <OffshoreButton {...args}>Secondary</OffshoreButton>;
Secondary.args = {
    color: 'secondary'
}

export const Disabled = args => <OffshoreButton {...args}>Disabled</OffshoreButton>;
Disabled.args = {
    disabled: true
}