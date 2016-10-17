// npm install webpack vue-loader babel-loader style-loader css-loader postcss-loader sass-loader file-loader gulp del cross-env webpack-dev-server babel-preset-es2015 --save-dev
// npm install bootstrap-sass vue vue-resource vue-router vuex --save

var gulp = require('gulp');
var del = require('del');

gulp.task('clean', function () {
    return del(['./public/fonts', './public/js']);
});

gulp.task('fonts', ['clean'], function () {
    return gulp.src('node_modules/bootstrap-sass/assets/fonts/*/**')
        .pipe(gulp.dest('./public/fonts'));
});

gulp.task('default', ['fonts']);
