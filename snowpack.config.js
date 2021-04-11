/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: {url: '/', static: true,  resolve: false},
    src: {url: '/dist'},
  },
  plugins: [
    '@snowpack/plugin-react-refresh', 
    '@snowpack/plugin-dotenv', 
    'snowpack-plugin-svgr'
  ],
  // routes: [
  //   /* Enable an SPA Fallback in development: */
  //   {"match": "routes", "src": ".*", "dest": "/index.html"},
  // ],
  optimize: {
    bundle: true,
    splitting: true,
    minify: true,
    target: 'es2018',
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
