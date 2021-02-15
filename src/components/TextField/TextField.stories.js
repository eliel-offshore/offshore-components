import React from 'react'
import OffshoreTextField from './TextField'

export default {
    title: 'Components/OffshoreTextField'
}

export const Default = args => <OffshoreTextField {...args}  />;
Default.args = {
    label: 'Default',
}

export const Error = args => <OffshoreTextField {...args}  />;
Error.args = {
    label: 'Error',
    error: true,
    value: 'test'
}

export const Disabled = args => <OffshoreTextField {...args}  />;
Disabled.args = {
    label: 'Disabled',
    disabled: true
}

