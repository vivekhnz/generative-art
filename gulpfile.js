let gulp = require('gulp');

let glob = require('glob');
let browserify = require('browserify');
let tsify = require('tsify');
let source = require('vinyl-source-stream');
let buffer = require('vinyl-buffer');
let uglify = require('gulp-uglify');
let rename = require('gulp-rename');
let es = require('event-stream');

let github = require('gulp-gh-pages');

// config
let config = {
    copy: [
        './src/index.html',
        './src/styles.css'
    ],
    sketches: './src/sketches/**/*.ts'
};

// copy non-compiled assets
gulp.task('copy', () => {
    return gulp.src(config.copy)
        .pipe(gulp.dest('dist'));
});

// compile sketches
function compile(entry) {
    return browserify({ entries: [entry] })
        .plugin(tsify)
        .bundle()
        .pipe(source(entry, './src'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(rename({
            dirname: "sketches",
            extname: '.js'
        }))
        .pipe(gulp.dest('./dist'));
}

gulp.task('compile', callback => {
    glob(config.sketches, (error, files) => {
        if (error) {
            callback(error);
        }
        else {
            let tasks = files.map(compile);
            es.merge(tasks).on('end', callback);
        }
    });
});

// build project
gulp.task('build', ['copy', 'compile']);

// deploy to GitHub Pages
gulp.task('deploy', ['build'], () => {
    return gulp.src('./dist/**/*')
        .pipe(github());
});