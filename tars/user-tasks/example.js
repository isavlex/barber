'use strict';

// This is example of task function

const gulp = tars.packages.gulp;
const plumber = tars.packages.plumber;
const notifier = tars.helpers.notifier;
const gcmq = require('gulp-group-css-media-queries');
// const rename = require('gulp-rename');
const postcss = require('gulp-postcss');
const tarsConfig = tars.config;
// Include browserSync, if you need to reload browser:
// const browserSync = tars.packages.browserSync;

/**
 * Task description
 */
module.exports = function () {

    return gulp.task('bcss', /*['required-task-name'],*/ function (done) {
        let processors = [

        ];
        return gulp.src('./dev/static/css/main.css')
            .pipe(plumber({
                errorHandler: function (error) {
                    notifier.error('An error occurred while something.', error);
                }
            }))
            .pipe(postcss(processors))
            // .pipe(rename('mainOut.css'))
            .pipe(gcmq())
            // Do stuff here, like
            // .pipe(less())
            .pipe(gulp.dest('./dev/static/css/'))

            // If you need to reload browser, uncomment the row below
            // .pipe(browserSync.reload({ stream:true }))
            .pipe(
                // You can change text of success message
                notifier.success('Example task has been finished')
            );

        // You can return callback, if you can't return pipe
        // done(null);
    });
};
