var gulp = require('gulp'),
    postcss = require('gulp-postcss');
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    del = require('del');

gulp.task('scripts', function() {
    return gulp.src('src/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(concat('main.js'))
        .pipe(gulp.dest('prod/code'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('prod/code'))
        .pipe(notify({ message: 'Scripts tasks for .js are complete.' }));
});

// IMAGES
gulp.task('images', function() {
    return gulp.src('../images/**/*')
        .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
        .pipe(gulp.dest('prod/images/'))
        .pipe(notify({ message: 'Images task complete' }));
});

// STYLES
gulp.task('styles', function() {
    var plugins = [
        autoprefixer({browser: ['last 1 version']}),
        cssnano()
    ];
    return gulp.src('src/*.css')
        .pipe(postcss(plugins))
        .pipe(gulp.dest('prod/code/'));
});

// CLEAN
gulp.task('clean', function() {
    return del(['prod/code', 'prod/images']);
});

// DEFAULT
gulp.task('default', ['clean'], function() {
    gulp.start('styles', 'scripts', 'images');
});

// WATCH
gulp.task('watch', function() {
    // Watch .css files
    gulp.watch('src/*.css', ['styles']);

    // Watch .js files
    gulp.watch('src/*.js', ['scripts']);

    // Watch images files
    gulp.watch('../images/**/*', ['images']);
})

// LiveReload WATCHER
gulp.task('watch', function() {
    // Create LiveReload server
    livereload.listen();

    // Watch any files in prod/, reload on change
    gulp.watch(['prod/*']).on('change', livereload.changed);
});
