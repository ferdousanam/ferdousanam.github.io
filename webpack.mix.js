const mix = require('laravel-mix');

if (!mix.inProduction()) {
  mix.webpackConfig({
    devtool: 'inline-source-map'
  })
}

if (mix.inProduction()) {
  mix.options({
    terser: {
      terserOptions: {
        compress: {
          drop_console: true
        }
      }
    }
  });
}

mix.js('src/js/app.js', 'js')
  .sass('src/sass/app.scss', 'css');

const publicPath = 'assets/';
mix.setPublicPath('assets');
mix.setResourceRoot('../');
mix.webpackConfig({
  output: {
    publicPath,
  },
});
