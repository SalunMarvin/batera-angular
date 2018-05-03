var gulp = require('gulp');

var compass = require('gulp-compass');
var watch = require('gulp-watch');

gulp.task('watch-sass', function () {
    return gulp.src('media/sass/**/*.scss')
        .pipe(compass({
            config_file: 'config/compass.rb',
            css: 'media/css',
            sass: 'media/sass',
            comments: true,
            task: 'watch'
        }))
        .pipe(gulp.dest('media/css'))
        .on('error', function (err) {
            console.log(err.message);
        });
});

gulp.task('compile-sass', function () {
    return gulp.src('media/sass/**/*.scss')
        .pipe(compass({
            config_file: 'config/compass.rb',
            css: 'media/css',
            sass: 'media/sass',
            comments: true
        }))
        .pipe(gulp.dest('media/css'))
        .on('error', function (err) {
            console.log(err.message);
        });
});

gulp.task('compile-compressed-sass', function () {
    return gulp.src('media/sass/**/*.scss')
        .pipe(compass({
            config_file: 'config/compass.rb',
            css: 'media/css',
            sass: 'media/sass',
            style: 'compressed'
        }))
        .pipe(gulp.dest('./media/css'))
        .on('error', function (err) {
            console.log(err.message);
        });
});

gulp.task('watch', ['watch-sass']);