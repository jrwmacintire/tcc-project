var gulp = require('gulp'),
    postcss = require('gulp-postcss');
    autoprefixer = prefixer('gulp-autoprefixer'),
    cssnano = prefixer('gulp-cssnano'),
    jshint = prefixer('gulp-jshint'),
    uglify = prefixer('gulp-uglify'),
    imagemin = prefixer('gulp-imagemin'),
    rename = prefixer('gulp-rename'),
    concat = prefixer('gulp-concat'),
    notify = prefixer('gulp-notify'),
    cache = prefixer('gulp-cache'),
    livereload = prefixer('gulp-livereload'),
    del = require('del');

gulp.task('css', function() {
    var plugins = [
        autoprefixer({browser: ['lest 1 version']}),
        cssnano()
    ];
    return gulp.src('./src/*.css')
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./prod'));
});
