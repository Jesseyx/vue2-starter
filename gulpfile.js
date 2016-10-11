var gulp = require('gulp');
var del = require('del');

gulp.task('clean', function () {
    return del('./public/fonts');
});

gulp.task('fonts', ['clean'], function () {
    return gulp.src('node_modules/bootstrap-sass/assets/fonts/*/**')
        .pipe(gulp.dest('./public/fonts'));
});

gulp.task('default', ['fonts']);
