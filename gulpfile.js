const gulp = require('gulp');
const prettier = require('@bdchauvette/gulp-prettier');

gulp.task('prettify', () => gulp
  .src('src/**/*.js')
  .pipe(
    prettier({
      // Normal prettier options, e.g.:
      singleQuote: true,
      trailingComma: 'all',
    }),
  )
  .pipe(gulp.dest((file) => file.base)));
