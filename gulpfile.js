var gulp = require('gulp');
var compass = require('gulp-compass');

gulp.task('compass', function() {
  ['./', './mobile/', './event/'].map(function(dir){
    return gulp.src(dir+'sass/*.sass')
    .pipe(compass({
      sass: dir+'sass/',
      css: dir+'css/',
    }))
    .pipe(gulp.dest(dir+'css'));
  })
});

gulp.task('default', function() {
  gulp.run('compass');
  gulp.watch('./**/*.sass', function() {
    gulp.run('compass');
  });
})
