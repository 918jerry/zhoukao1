var gulp = require('gulp');
var connect = require('gulp-connect');
var concat = require('gulp-concat');
var mincss = require('gulp-clean-css')
var minjs = require('gulp-uglify');

gulp.task('httpserver',function(){
	connect.server({
        port:7070,
        livereload:true
    })
})

gulp.task('minJS',function(){
	gulp.src(['./script.js','./script2.js'])
		.pipe(minjs())
		.pipe(gulp.dest('./'))
})

gulp.task('Concat',function(){
	gulp.src(['./script.js','./script2.js'])
		.pipe(concat('scriptall.js'))
		.pipe(gulp.dest('./'))
})
gulp.task('default',['minJS','httpserver','Concat'])
