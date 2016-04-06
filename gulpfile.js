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
// Añadimos uglify ya que podemos minimizar los js con webpack
var uglify = require('gulp-uglify');

// Este gulp es una gran funcion que a partir de los ficheros de entrada
// produce los de salida f : Files → Files

var inR = 'src/';
var input = {
  html: inR + 'html/*.html',
  css: inR + 'css/*.css',
  sass: inR + 'styles/*sass',
  js: inR + 'js/*.js'
};

var outR = 'public/';
var output = {
  html: outR,
  sass: outR + 'css/',
  js: outR + 'js/'
};

// gulp.task('minify-css', function() {
//   return gulp.src(paths.css)
//     .pipe(cleanCSS({compatibility: 'ie8'}))
//     .pipe(gulp.dest(vendor));
// });

gulp.task('minified-js', function() {
  return gulp.src(input.js)
    .pipe(uglify())
    .pipe(gulp.dest(output.js));
});

gulp.task('minify-html', function() {
  return gulp.src(input.html)
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(output.html));
});

gulp.task('generate-pages', function() {
  return gulp.src(outR + '**/*')
    .pipe(ghPages('.'));
});

gulp.task('clean', function () {
	return gulp.src(outR, {read: false})
		.pipe(clean());
});

gulp.task('watch', function () {
  gulp.watch(input.js,['minified-js']);
  gulp.watch(input.html, ['minify-html']);
});

// Por defecto, rehacemos todo de nuevo
gulp.task('default', ['minify-html', "minified-js"]);
