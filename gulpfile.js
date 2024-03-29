var gulp= require('gulp'),
	gutil=require('gulp-util'),
	uglify=require('gulp-uglify'),
	sass= require('gulp-ruby-sass'),
	coffee= require('gulp-coffee'),
	concat=require('gulp-concat'),
	browserify= require('gulp-browserify'),

	livereload=require('gulp-livereload'),
	lr=require('tiny-lr');
	server=lr();

var coffeeSources= [
'components/coffee/*.coffee'
				];

var jsSources= [
			  'components/lib/jquery.js',
			  'components/scripts/*.js'
			   ];

var sassSources= [
		'components/sass/*.scss'
	
				];




gulp.task('js', function(){
	gulp.src(jsSources)
			.pipe(uglify())
			.pipe(browserify())
			.pipe(concat('script.js'))
			.pipe(gulp.dest('js'));
});


gulp.task('coffee', function() {
	gulp.src(coffeeSources)
		.pipe(coffee({bare:true})
			.on('error', gutil.log))
		.pipe(gulp.dest('components/scripts'))
});



gulp.task('sass', function() {
	gulp.src(sassSources)
		.pipe(sass({style:'expanded', lineNumbers:true}))
		.on('error', gutil.log)
		.pipe(concat('style.css'))
		.pipe(gulp.dest('css'))
		.pipe(livereload());
});


gulp.task('watch', function() {
	var server=livereload();

	gulp.watch(jsSources, ['js']);
	gulp.watch(coffeeSources, ['coffee']);
	gulp.watch(sassSources, ['sass']);
	gulp.watch(['js/script.js', '*.html'], function(e){
		server.changed(e.path);
	});
});

gulp.task('default', ['sass', 'js',  'coffee', 'watch']);