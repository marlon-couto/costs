const gulp = require('gulp');
const watch = require('gulp-watch');
const prettier = require('@bdchauvette/gulp-prettier');

const PATTERN = 'src/**/*.{js,jx,html,css,json,md}';

gulp.task('prettify', () => gulp
  .src(PATTERN)
  .pipe(watch(PATTERN))
  .pipe(
    prettier({
      // Normal prettier options, e.g.:
      singleQuote: true,
      trailingComma: 'all',
    }),
  )
  .pipe(gulp.dest((file) => file.base)));

gulp.task('default', gulp.series('prettify'));
