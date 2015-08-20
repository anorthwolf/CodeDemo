
/**
 * Created by ayang on 8/20/2015.
 */
var gulp = require('gulp');
var stripDebug = require('gulp-strip-debug');


gulp.task('htmlTest', function () {
    return gulp.src('ConsoleDemo.js')
        .pipe(stripDebug())
        .pipe(gulp.dest('dist'));
});

gulp.task('default', function () {
    return gulp.src('ConsoleLogSeed.js')
        .pipe(stripDebug())
        .pipe(gulp.dest('dist'));
});


///**
// * Created by ayang on 8/20/2015.
// */
//// 引入 gulp
//var gulp = require('gulp');
//
//// 引入组件
//var jshint = require('gulp-jshint');
//var sass = require('gulp-sass');
//var concat = require('gulp-concat');
//var uglify = require('gulp-uglify');
//var rename = require('gulp-rename');
//
//// 检查脚本
//gulp.task('lint', function() {
//    gulp.src('./js/*.js')
//        .pipe(jshint())
//        .pipe(jshint.reporter('default'));
//});
//
//// 编译Sass
//gulp.task('sass', function() {
//    gulp.src('./scss/*.scss')
//        .pipe(sass())
//        .pipe(gulp.dest('./css'));
//});
//
//// 合并，压缩文件
//gulp.task('scripts', function() {
//    gulp.src('./js/*.js')
//        .pipe(concat('all.js'))
//        .pipe(gulp.dest('./dist'))
//        .pipe(rename('all.min.js'))
//        .pipe(uglify())
//        .pipe(gulp.dest('./dist'));
//});
//
//// 默认任务
//gulp.task('default', function(){
//    gulp.run('lint', 'sass', 'scripts');
//
//    // 监听文件变化
//    gulp.watch('./js/*.js', function(){
//        gulp.run('lint', 'sass', 'scripts');
//    });
//});