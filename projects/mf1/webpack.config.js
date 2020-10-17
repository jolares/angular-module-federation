const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "http://localhost:3000/",
    uniqueName: "mf1"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
        // For remotes (please adjust)
        name: "mf1",
        library: { type: "var", name: "mf1" },
        filename: "remoteEntry.js",
        exposes: {
          './Module': './projects/mf1/src/app/app.module.ts',
        },
        shared: [
          // Angular
          "@angular/core",
          "@angular/common",
          "@angular/router",
          // Other Dependencies to be Shared...
          {
            "@angular/material": {
              singleton: true
            }
          }
        ]
    })
  ],
};
