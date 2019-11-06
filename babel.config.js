/* eslint-disable import/prefer-default-export */
module.exports = function (api) {
  api.cache(true);
  const presets = [
    [
      '@babel/preset-env',
      {
        modules: 'auto',
        targets: {
          browsers: ['defaults'],
        },
        useBuiltIns: 'entry',
      },
    ],
    '@babel/preset-flow',
  ];
  const plugins = [
    '@babel/plugin-proposal-class-properties',
    '@babel/transform-runtime',
    'add-module-exports',
    'babel-plugin-dynamic-import-node',
  ];

  return {
    presets,
    plugins,
  };
};

