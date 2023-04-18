module.exports = {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', {runtime: 'automatic'}],
  ],
  // Para el css
  // plugins: [
  //   ["@babel/plugin-proposal-private-property-in-object", { "loose": true }],
  //   ["@babel/plugin-proposal-class-properties", { "loose": true }],
  //   ["@babel/plugin-proposal-private-methods", { "loose": true }]
  // ]
};