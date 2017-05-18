var gulp       = require('gulp');
var concat     = require('gulp-concat');
var sass       = require('gulp-sass');
var rename     = require('gulp-rename');
var cleancss   = require('gulp-clean-css');
var uglify     = require('gulp-uglify');
var browersync = require('browser-sync').create();
var imagemin   = require('gulp-imagemin');
var reload     = browersync.reload;

gulp.task('server',['minify','sass','uglify','imagemin'],function(){
    browersync.init({
        server : './'
    });
    gulp.watch('./scss/*.scss',['sass']);
    gulp.watch('./css/*.css',['minify']);
    gulp.watch(['./js/*.js'],['uglify']);
    gulp.watch("./*.html").on('change', reload);
});

gulp.task('sass',function(){
    gulp.src('./scss/*.scss')
    .pipe(sass())
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./css'))
    .pipe(reload({stream: true}));
});

gulp.task('minify',function(){
    gulp.src('./css/*.css')
    .pipe(concat('main.css'))
    .pipe(rename('main.min.css'))
    .pipe(cleancss())
    .pipe(gulp.dest('./dest/css'))
    .pipe(reload({stream: true}));
});

gulp.task('uglify',function(){
    gulp.src('./js/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./dest/js'))
    .pipe(rename('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dest/js/'))
    .pipe(reload({stream: true}));
});

gulp.task('imagemin',function(){
    gulp.src('./images/*.png')
    .pipe(imagemin({
            progressive: true
        }))
    .pipe(gulp.dest('./dest/images'));
});

gulp.task('default',['server']);
