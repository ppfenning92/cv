export default {
  mount: {
    public: {
      url: '/',
      // static: true,
      // resolve: false
    },
    src: { url: '/dist' },
  },
  plugins: [
    [
      '@snowpack/plugin-typescript',
    ],
    [
      '@snowpack/plugin-sass',
      {
        style: 'expanded',
        loadPath: ['**/*.scss'],
        embedSourceMap: true
      }
    ],
    [
      '@snowpack/plugin-postcss',
    ],
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // { "match": "routes", "src": ".*", "dest": "/index.html" },
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
