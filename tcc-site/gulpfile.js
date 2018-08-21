var gulp = require('gulp'),
    htmlclean = require('gulp-htmlclean'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssnano = require('cssnano'),
    critical = require('critical').stream,
    // criticalCss = require('gulp-critical-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    image = require('gulp-image'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    insert = require('gulp-insert'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect'),
    watch = require('gulp-watch'),
    sitemap = require('gulp-sitemap'),
    del = require('del'),
    gutil = require('gulp-util'),
    changed = require('gulp-changed'),
    connect = require('gulp-connect');


//                      File source variables.
var htmlSource = 'src/*.html';
var cssSource = 'src/styles/*.css';
var jsSource = 'src/scripts/*.js';
var imagesSource = 'src/images/*.png';
var allSources = htmlSource.concat(cssSource).concat(jsSource);
var htmlDest = 'build/';
var cssDest = 'build/styles/';
var jsDest = 'build/scripts/';
var imagesDest = 'build/images/'

//                      connect to 'Connect' server
gulp.task('connect', function() {
    connect.server({
        root: '.',
        livereload: true
    });
});

//                      Livereload
gulp.task('livereload', function() {
    gulp.src(allSources)
        .pipe(connect.reload());
});

//                      Watch files for changes
gulp.task('watch', function() {
    gulp.watch(htmlSource, ['html']);
    gulp.watch(cssSource, ['css']);
    gulp.watch(jsSource, ['js']);
    gulp.watch(imagesSource, ['images']);
});

//                      JS Gulp task
gulp.task('js', function() {
    return gulp.src(jsSource)
        .pipe(changed(jsDest))
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest))
        .pipe(connect.reload())
});

//                      HTML Gulp task
gulp.task('html', [], function() {
    gulp.src(htmlSource)
        .pipe(changed(htmlDest))
        .pipe(htmlclean())
        .pipe(gulp.dest(htmlDest))
        .pipe(connect.reload())
});

// STYLES
gulp.task('css', function() {
    var plugins = [
        autoprefixer({ browsers: ['last 1 version'] }),
        cssnano()
    ];
    return gulp.src(cssSource)
        .pipe(changed(cssDest))
        .pipe(postcss(plugins))
        .pipe(gulp.dest(cssDest))
        .pipe(connect.reload())
});

// Generate & Inline Critical-path CSS
gulp.task('critical', function() {
    return gulp.src(htmlDest)
        .pipe(critical({
            inline: true,
            css: [cssDest],
            // FIXME: This (vvv) may need a wildcard with '.css' extension.
            base: 'cake/',
            minify: true
        }))
        .on('error', function(err) {gutil.log(gutil.colors.red(err.message)); })
        .pipe(gulp.dest(htmlDest));
});

gulp.task('images', function() {
    return gulp.src(imagesSource)
        .pipe(changed(imagesDest))
        .pipe(image({
            pngquant: true,
            optipng: false,
            zopflipng: true,
            jpegRecompress: false,
            mozjpeg: true,
            guetzli: false,
            gifsicle: false,
            svgo: false,
            concurrent: 10
        }))
        .pipe(gulp.dest(imagesDest))
        .pipe(connect.reload());
});

// CLEAN
// gulp.task('clean', function() {
//     return del(['./build/**/*']);
// });

// DEFAULT
gulp.task('default', function() {
    gulp.start('connect', 'livereload', 'watch', 'css', 'js', 'html', 'critical', 'images');
});
