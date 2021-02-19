import { addDecorator } from '@storybook/react';
import { withTests } from '@storybook/addon-jest';
import results from '../src/.jest-test-results.json';
// import { muiTheme } from 'storybook-addon-material-ui'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: {
      order: ['Setup', ['Getting Started', 'Theme Setup', 'Debugging', 'Library Setup', 'Component'], 'Components'],
    },
  },
}

const newTheme = {
  themeName: 'Grey Theme',
  palette: {
      primary1Color: '#00bcd4',
      alternateTextColor: '#4a4a4a',
      canvasColor: '#616161',
      textColor: '#bdbdbd',
      secondaryTextColor: 'rgba(255, 255, 255, 0.54)',
      disabledColor: '#757575',
      accent1Color: '#607d8b',
  },
};

// export const decorators = [
// 	muiTheme()
// ];

addDecorator(
  withTests({
    results,
  })
);