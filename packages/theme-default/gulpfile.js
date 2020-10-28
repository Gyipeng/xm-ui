
// const gulp = require('gulp')
const {src, dest, parallel, watch} = require('gulp')
const sass = require('gulp-sass')
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
