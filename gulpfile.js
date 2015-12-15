var gulp = require ('gulp'),
    browserSync = require('browser-sync').create();

// --------------  js transpiler  --------------   //
gulp.task('script', function(){
   gulp.src('js/*.js') // select all js files in js/ folder
        .pipe(browserSync.stream());
});

// --------------  scss  --------------   //
gulp.task('css', function(){
   gulp.src('css/*.css')
        .pipe(browserSync.stream());
});

// --------------  html move  --------------   //
gulp.task('html', function(){
   gulp.src('*.html')
        .pipe(browserSync.stream());
});

// --------------  watch changes  --------------   //
gulp.task('watch', function(){
    browserSync.init({
        server : {
            baseDir : ''
        }
    })
    gulp.watch('*.html', ['html']);
    gulp.watch('js/*.js', ['script']);
    gulp.watch('css/*.css', ['css']);
    gulp.watch('*.html').on('change', browserSync.reload);
});


// what to run when 'gulp' is entered in the terminal //
gulp.task('default', ['html', 'css', 'script', 'watch']);
