const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imageMin = require('gulp-imagemin');


function compressedImg(){
    return gulp.src('./source/images/*')
    .pipe(imageMin())
    .pipe(gulp.dest('./build/images'))
}

function compressedJs(){
    return gulp.src('./source/scripps/*.js')
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest('./build/scripts'))
}

function compila(){
    return gulp.src('./source/Styles/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./build/Styles'));
}

exports.default = function(){
    gulp.watch('./source/Styles/*.scss', { ignoreInitial: false }, gulp.series(compila));
    gulp.watch('./source/images/*', { ignoreInitial: false } , gulp.series(compressedImg))
    gulp.watch('./source/scripts/*.js', { ignoreInitial: false } , gulp.series(compressedJs))
}
