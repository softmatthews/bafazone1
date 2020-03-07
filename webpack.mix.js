const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js') 
    .js('resources/ass/js/jquery.min.js', 'public/js') 
    .js('resources/ass/js/jquery-ui.min.js', 'public/js') 
    .js('resources/ass/js/jquery.fancybox.min.js', 'public/js')  
    .js('resources/ass/js/modernizr.min.js', 'public/js')            
    .js('resources/ass/js/jquery.easytabs.min.js', 'public/js') 
    .js('resources/ass/js/jquery-shuffle.js', 'public/js') 
    .js('resources/ass/js/owl.carousel.min.js', 'public/js')      
    .js('resources/ass/js/jquery.themepunch.plugins.min.js', 'public/js') 
    .js('resources/ass/js/jquery.themepunch.revolution.min.js', 'public/js') 
    .js('resources/ass/js/jquery.countdown.plugins.js', 'public/js')
    .js('resources/ass/js/jquery.countdown.js', 'public/js')
    .js('resources/ass/js/slick.min.js', 'public/js')
  .js('resources/ass/js/jquery.elevateZoom-3.0.8.min.js', 'public/js')
  .js('resources/ass/js/tada.js', 'public/js') 
   .sass('resources/sass/app.scss', 'public/css')
    .sass('resources/ass/css/owl.carousel.min.css', 'public/css')
    .sass('resources/ass/css/timber.scss.css', 'public/css')
    .sass('resources/ass/css/theme.scss.css', 'public/css')
    .sass('resources/ass/css/themepunch.revolution.css', 'public/css')  
    .sass('resources/ass/css/megastore.scss.css', 'public/css') 
    .sass('resources/ass/css/slick.css', 'public/css')
  .sass('resources/ass/css/rating.css', 'public/css');

