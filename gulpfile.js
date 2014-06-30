var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('static', function () {
    gulp.src(['**/*.html', 'scripts/*.js', 'styles/*.css'])
      .pipe(connect.reload());
});

gulp.task('webserver', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('watch', function() {
  gulp.watch(['styles/**', 'scripts/**', '*.html'], ['static']);
});

gulp.task('default', ['webserver', 'watch']);
