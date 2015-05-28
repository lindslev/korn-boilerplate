var gulp = require('gulp');
var browserify = require('gulp-browserify');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('browserify', function() {
    gulp.src('src/client/js/app.js')
        .pipe(browserify({transform: 'reactify'}))
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function() {
    gulp.src('src/client/index.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('buildCSS', function () {
    gulp.src('src/client/sass/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('default',['browserify', 'copy', 'buildCSS']);

gulp.task('watch', function() {
    gulp.watch('src/**/*.*', ['default']);
});
