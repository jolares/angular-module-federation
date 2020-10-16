const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "http://localhost:4200/",
    uniqueName: "mf2"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      // For remotes (please adjust)
      name: "mf2",
      library: { type: "var", name: "mf2" },
      filename: "remoteEntry.js",
      exposes: {
        './Module': './projects/mf2/src/app/app.module.ts',
      },
      shared: [
        // Angular
        "@angular/core",
        "@angular/common",
        "@angular/router",
        // Other Dependencies to be Shared...
        {
          "@angular/material": {
            strictVersion: true,
            requiredVersion: ">=9.0.0 <10.0.0"
          }
        }
      ]
    })
  ],
};
