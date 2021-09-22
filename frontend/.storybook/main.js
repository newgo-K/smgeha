const path = require('path');
const fs = require('fs');
const { merge } = require('webpack-merge');

function getPackageDir(filepath) {
  let curDir = path.dirname(require.resolve(filepath));

  while (true) {
    if (fs.existsSync(path.join(curDir, 'package.json'))) {
      return curDir;
    }

    const { dir, root } = path.parse(curDir);

    if (dir === root) {
      throw new Error(
        `Could not find package.json in the parent directories starting from ${filepath}.`,
      );
    }
    curDir = dir;
  }
}

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    '@storybook/addon-viewport',
    'storybook-preset-craco',
  ],
  webpackFinal: async (config) => {
    return merge(config, {
      resolve: {
        alias: {
          '@emotion/core': getPackageDir('@emotion/react'),
          '@emotion/styled': getPackageDir('@emotion/styled'),
          'emotion-theming': getPackageDir('@emotion/react'),
          '@emotion/babel-preset-css-prop': getPackageDir(
            '@emotion/babel-preset-css-prop',
          ),
        },
      },
    });
  },
};
