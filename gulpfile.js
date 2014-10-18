var gulp = require('gulp');

gulp.task('default', function () {
    var sourcemaps = require('gulp-sourcemaps');
    var autoprefixer = require('gulp-autoprefixer');
    var less = require('gulp-less');

    return gulp.src('*.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(autoprefixer({ browsers: ['last 2 version'] }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./'));
});

gulp.task('watch', function () {
    var watcher = gulp.watch('*.less', ['default']);
    watcher.on('change', function (event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });

});
