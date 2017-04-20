/* eslint-disable strict */

'use strict';

/* eslint-enable strict */

const gulp = require('gulp');
// const nunjucksRender = require('gulp-nunjucks-render');
// const nunjucks = require('gulp-nunjucks');
const nunjucks = require('gulp-nunjucks-html');

const hotCopy = require('gulp-hotcopy');

hotCopy.configure({
  hotCopyDir: './src/assets/hot-copy/'
});

let meta = require('./../../meta.json');


module.exports = () => {
  meta = hotCopy.insertHotCopy(meta);

  // nunjucksRender.nunjucks.configure(['src/templates/'], { watch: false });

  return gulp.src([
    './src/templates/**/*.html',
    '!./src/templates/base.html',
    '!./src/templates/partials/**/*.html',
  ])
    .pipe(
      nunjucks({
        locals: meta,
        searchPaths: ['src/templates/'],
        setUp: function(env) {
          hotCopy.extendNunjucks(env);
          return env;
        },
      })
    )
    .pipe(gulp.dest('./dist'));
};
