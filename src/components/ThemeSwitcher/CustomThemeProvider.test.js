import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { ThemeSwitcher } from './CustomThemeProvider.stories' 

it('renders a theme switcher', () => {
    const { getByText } = render(<ThemeSwitcher />);

    getByText('Theme Switcher')
    getByText('Theme')
});