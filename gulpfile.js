var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat'),
    clean = require('gulp-clean'),
    uglify = require('gulp-uglify'),
    ngAnnotate = require('gulp-ng-annotate'),
    gulpUtil = require('gulp-util'),
    babel = require('gulp-babel');

gulp.task('browserify', function() {
  // Single point of entry (make sure not to src ALL your files, browserify will figure it out for you)
  return gulp.src(['app/app.js'])
             .pipe(browserify())
             // Bundle to a single file
             .pipe(concat('bundle.js'))
             // Output it to our dist folder
             .pipe(gulp.dest('dist/js'));
});

gulp.task('watch', function() {
  // Watch our scripts
  gulp.watch(['app/*.js', 'app/**/*.js', 'app/**/**/*.js'],[
    'browserify'
  ]);
});

gulp.task('js', function () {
  gulp.src(['app/**/*.js', 'app/**/**/*.js',])
    .pipe(babel({
      presets: ['es2015']
    }))
    // .pipe(concat('test.js'))
    .pipe(ngAnnotate())
    .pipe(uglify().on('error', gulpUtil.log))
    .pipe(gulp.dest('dist'));
});


gulp.task('default', function(){
  gulp.start('js');
});
