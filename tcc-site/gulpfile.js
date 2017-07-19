var gulp = require('gulp'),
    htmlclean = require('gulp-htmlclean'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssnano = require('cssnano'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    del = require('del');

// JAVASCRIPT TASK
gulp.task('js', function() {
    return gulp.src('./src/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        // .pipe(gulp.dest('tcc-site/build/'))  COMMENTED OUT TO CHECK FOR LACK OF COMPRESSED .JS AFTER GULP
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('./build/js/'))
        .pipe(notify({ message: '.js tasks are complete.' }));
});

// MOVE HTML FILE, NO MINIFICATION OR COMPRESSION
gulp.task('html', [], function() {
    gulp.src("./src/html/*.html")
        .pipe(htmlclean())
        .pipe(gulp.dest('./build/html/'))
        .pipe(notify({ message: '.html task complete.'}));
});

// MOVE PHP FILE, NO MINIFICATION OR COMPRESSION
gulp.task('php', [], function() {
    gulp.src("./src/php/*.php")
        .pipe(gulp.dest('./build/php/'))
        .pipe(notify({ message: '.php task is complete. '}));
});

// STYLES
gulp.task('css', function() {
    var plugins = [
        autoprefixer({browsers: ['last 1 version']}),
        cssnano()
    ];
    return gulp.src('./src/css/*.css')
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./build/css/'))
        .pipe(notify({ message: '.css tasks complete.' }));
});

// IMAGES
gulp.task('images', function() {
    return gulp.src('./src/images/*.*')
        .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
        .pipe(gulp.dest('./build/images/'))
        .pipe(notify({ message: 'Images task complete.' }));
});

// CLEAN
gulp.task('clean', function() {
    return del(['./build/**/*']);
});

// DEFAULT
gulp.task('default', ['clean'], function() {
    gulp.start('css', 'js', 'html', 'php', 'images');
});

// WATCH
gulp.task('watch', function() {
    // Watch .html files
    gulp.watch('./src/html/*.html', ['html']);

    // Watch .css files
    gulp.watch('./src/css/*.css', ['css']);

    // Watch .js files
    gulp.watch('./src/js/*.js', ['js']);

    // Watch .php files
    gulp.watch('./src/php/*.php', ['php']);

    // Watch images files
    gulp.watch('./src/images/*', ['images']);
})

// LiveReload WATCHER
gulp.task('watch', function() {
    // Create LiveReload server
    livereload.listen();

    // Watch any files in prod/, reload on change
    gulp.watch(['./build/**/*']).on('change', livereload.changed);
});
