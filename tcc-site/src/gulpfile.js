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

gulp.task('scripts', function() {
    return gulp.src('./src/*.js')
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'))
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./prod/'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('./prod/code/'))
        .pipe(notify({ message: 'Scripts tasks for .js are complete.' }));
});

gulp.task('images', function() {
    return gulp.src('./images/**/*')
        .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
        .pipe(gulp.dest('./src/prod/images/'))
        .pipe(notify({ message: 'Images task complete' }));
});

gulp.task('css', function() {
    var plugins = [
        autoprefixer({browser: ['last 1 version']}),
        cssnano()
    ];
    return gulp.src('./src/*.css')
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./prod/code/'));
});

gulp.task('clean', function() {
    return del(['./prod/code', './prod/images']);
});
