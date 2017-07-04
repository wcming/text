var gulp = require('gulp'),
    minifyCSS = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify');

gulp.task('minifycss', function () {
    //压缩的文件
    //1、['css/*.css']
    //2、['css/a.css','css/n.css']

    return gulp.src(['css/*.css'])
        //将读取的文件合并到 main.css
        .pipe(concat('main.css'))
        //main.css 重命名为 main.min.css
        .pipe(rename({suffix: '.min'}))
        //执行压缩
        .pipe(minifyCSS())
        //输出目录
        .pipe(gulp.dest('css/'))
        //完成压缩提示信息
        .pipe(notify({messafe: 'ok!'}))
});