/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: {url: '/', static: true},
    src: {url: '/dist'},
  },
  plugins: [
    '@snowpack/plugin-react-refresh', 
    '@snowpack/plugin-dotenv', 
    '@snowpack/plugin-webpack', 
    '@snowpack/plugin-typescript',
    'snowpack-plugin-svgr'
  ],
  // routes: [
  //   /* Enable an SPA Fallback in development: */
  //   {"match": "routes", "src": ".*", "dest": "/index.html"},
  // ],
  optimize: {
    "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    port: 3000,
    // open: 'false',
  },
  buildOptions: {
    out: 'build',
    clean: true
  },
  testOptions: {
    files: ['src/**/*.test.*']
  },
  alias: {
    "@app": "./src/",
  }
};
