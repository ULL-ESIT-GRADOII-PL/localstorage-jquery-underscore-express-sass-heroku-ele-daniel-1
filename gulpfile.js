var gulp = require('gulp');
// watch permite tener tareas ejecuntdose en segundo plano cuando ocurre un
// determinado evento como guardar un archivo.
var watch = require('gulp-watch');
var htmlmin = require('gulp-htmlmin');
// var cleanCSS = require('gulp-clean-css');
// Permite añadir determinadas carpetas a una determinada rama, es bastante util
// para actualizar el gh-pages
var ghPages = require('gulp-gh-pages');
// Para vaciar la carpeta public de toda la *** generada, tenemos un comando para
// enviarla muy lejos
var clean = require('gulp-clean');


var src = 'assets';
var vendor = 'public/';
var paths = {
  html: '*.html',
  css: src + '/css/*.css',
  js: src + '/js/*.js'
};

gulp.task('minify-css', function() {
  return gulp.src(paths.css)
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest(vendor));
});

gulp.task('minify-html', function() {
  return gulp.src(paths.html)
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(vendor));
});

gulp.task('generate-pages', function() {
  return gulp.src(vendor + '**/*')
    .pipe(ghPages('.'));
});

gulp.task('clean', function () {
	return gulp.src(vendor, {read: false})
		.pipe(clean());
});

gulp.task('watch', function () {
  gulp.watch(paths.css, ['minify-css']);
  gulp.watch(paths.html, ['minify-html']);
});

// Por defecto, rehacemos todo de nuevo
gulp.task('default', ['minify-css', 'minify-html']);
