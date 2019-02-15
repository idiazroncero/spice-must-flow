const presets = [
  [
    "@babel/env",
    {
      targets: {
        browsers: ["> 1%"]
      },
      useBuiltIns: "usage",
    },
  ],
];

module.exports = { presets };