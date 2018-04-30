var gulp = require('gulp');
var compass = require('gulp-compass');

gulp.task('compass', function() {
  ['./', './mobile/', './event/'].forEach(function(dir){
    gulp.src(dir+'sass/*.sass')
    .pipe(compass({
      sass: dir+'sass/',
      css: dir+'sass/',
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
