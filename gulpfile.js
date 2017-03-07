let gulp = require('gulp');
let github = require('gulp-gh-pages');

// build project
gulp.task('build', () => {
    return gulp.src('./src/**/*')
        .pipe(gulp.dest('dist'));
});

// deploy to GitHub Pages
gulp.task('deploy', ['build'], () => {
    return gulp.src('./dist/**/*')
        .pipe(github());
});