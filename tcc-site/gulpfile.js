var gulp = require('gulp'),
    htmlclean = require('gulp-htmlclean'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssnano = require('cssnano'),
    critical = require('critical').stream,
    // criticalCss = require('gulp-critical-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    imageminOptipng = require('imagemin-optipng'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    insert = require('gulp-insert'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    sitemap = require('gulp-sitemap'),
    del = require('del'),
    gutil = require('gulp-util'),
    changed = require('gulp-changed');

// JAVASCRIPT TASK
gulp.task('js', function() {
    return gulp.src('./src/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(uglify())
        .pipe(gulp.dest('./build/js/'));
        // .pipe(notify({ message: '.js tasks are complete.' }));
});

// MOVE HTML FILE, NO MINIFICATION OR COMPRESSION
gulp.task('html', [], function() {
    gulp.src("./src/*.html")
        .pipe(htmlclean())
        .pipe(gulp.dest('./build/'));
        // .pipe(notify({ message: '.html task complete.'}));
});

// STYLES
gulp.task('css', function() {
    var plugins = [
        autoprefixer({ browsers: ['last 1 version']}),
        cssnano()
    ];
    return gulp.src('./src/css/*.css')
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./build/css/'));
});

// Generate & Inline Critical-path CSS
gulp.task('critical', function() {
    return gulp.src('build/*.html')
        .pipe(critical({
            inline: true,
            base: 'build/',
            css: ['./build/css/*.css'],
            minify: true
        }))
        .on('error', function(err) {gutil.log(gutil.colors.red(err.message)); })
        .pipe(gulp.dest('build/'));
});

gulp.task('images', function() {
    return gulp.src('./src/images/*.png')
        .pipe(changed('./build/images/'))
        .pipe(imagemin([imageminOptipng()]))
        .pipe(gulp.dest('build/images'))
});

// SITEMAP
gulp.task('sitemap', function() {
    return gulp.src('./build/*.html', {
        read: false
    })
        .pipe(sitemap({
            siteUrl: 'http://www.theclosingcut.com/index.html'
        }))
        .pipe(gulp.dest('./build'));
});

// CLEAN
gulp.task('clean', function() {
    return del(['./build/**/*']);
});

// DEFAULT
gulp.task('default', function() {
    gulp.start('css', 'js', 'html', 'images', 'sitemap', 'critical');
});
