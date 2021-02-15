import React from 'react'
import OffshoreSignIn from './SignIn'

export default {
    title: 'Components/OffshoreSignIn',
    argTypes: { onClick: { action: 'clicked' } },
}

export const Default = () => <OffshoreSignIn  />;
Default.storyName = 'Initial State';

export const ErrorState = () => <OffshoreSignIn  initialState={{ email: 'test', password: '' }} />;