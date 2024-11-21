const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function GulpSass() {
    return gulp.src('./src/css/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./build/css'))
}

function GulpJs() {
    return gulp.src('./src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'))
}

function GulpImg() {
    return gulp.src('./src/imagens/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'))
}

exports.default = function() {
    gulp.watch('./src/css/*.scss', {ignoreInitial: false}, gulp.series(GulpSass));
    gulp.watch('./src/js', {ignoreInitial: false}, gulp.series(GulpJs));
    gulp.watch('./src/imagens/*', {ignoreInitial: false}, gulp.series(GulpImg));
};
