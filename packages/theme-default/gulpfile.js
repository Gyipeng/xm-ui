/*
 * @Author: gyp
 * @Date: 2021-06-09 14:10:09
 * @LastEditTime: 2025-03-21 15:22:50
 * @LastEditors: gyp
 * @Description: 
 * @FilePath: /xm-ui/packages/theme-default/gulpfile.js
 * 可以输入预定的版权声明、个性签名、空行等
 */

// const gulp = require('gulp')
const {src, dest, parallel, watch} = require('gulp')
const sass = require('gulp-dart-sass');
const minifyCSS = require('gulp-csso')
//
// gulp.task('compile', function () {
//   return gulp.src('./src/*.scss')
//     .pipe(sass())
//     .pipe(minifyCSS())
//     .pipe(gulp.dest('./lib'))
// })
//
// gulp.task('watch', function () {
//   gulp.watch('./src/*.scss', ['compile'])
// })
//
// gulp.task('default', ['compile',"watch"])

function buildScssTask () {
  return src('./src/*.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(dest('./lib'))
}

function watchBuildScssTask () {
  console.log('启动Scss转CSS的监听...')
  watch(['src/**/*.scss'], {}, buildScssTask)
}

exports.build = buildScssTask
exports.default = parallel(buildScssTask, watchBuildScssTask)
