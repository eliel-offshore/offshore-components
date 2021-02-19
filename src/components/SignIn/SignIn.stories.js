import React from 'react'
import OffshoreSignIn from './SignIn';
import { withDesign } from 'storybook-addon-designs'

export default {
    title: 'Components/OffshoreSignIn',
    argTypes: { onClick: { action: 'clicked' } },
    decorators: [withDesign],
}

export const Default = () => <OffshoreSignIn  />;
Default.parameters = {
    jest: ['SignIn.test.js'],
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File',
    },
};
Default.storyName = 'Initial State';

export const ErrorState = () => <OffshoreSignIn  initialState={{ email: 'test', password: '' }} />;