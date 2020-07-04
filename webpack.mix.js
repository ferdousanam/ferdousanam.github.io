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

mix.js('src/js/app.js', 'assets/js')
  .sass('src/sass/app.scss', 'assets/css')
  .setPublicPath('assets');
