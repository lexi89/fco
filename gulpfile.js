"use strict";

var gulp = require('gulp');
var sass = require("gulp-sass");
var autoprefixer = require("autoprefixer");

var sassGlob = "./app/styles/*.scss"

gulp.task("default", function () {
  gulp.watch(sassGlob, ['sass']);
})

gulp.task('sass', function () {
  return gulp.src('./app/styles/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app'));
});
