import gulp from 'gulp';
import nodemon from 'gulp-nodemon';
import gulpSass from 'gulp-sass';
import dartSass from 'sass';
import csso from 'gulp-csso';
import autoprefixer from 'gulp-autoprefixer';
import concat from 'gulp-concat';
import browserSync from 'browser-sync';
import { deleteSync } from 'del';

const { src, dest, series, watch } = gulp;

const sass = gulpSass(dartSass);
const sync = browserSync.create();

function scss() {
    return src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(
            autoprefixer({
                overrideBrowserslist: ['>1%'],
            }),
        )
        .pipe(csso())
        .pipe(concat('styles.css'))
        .pipe(dest('./dist/css'));
}

function html() {
    return src('src/views/**/*.html').pipe(dest('dist/views'));
}

function images() {
    src('src/images/*.+(png|svg|jpg|webp)').pipe(dest('dist/images'))
}

function icons() {
    src('src/icons/*.+(png|svg|jpg|webp)').pipe(dest('dist/icons'))
}

function script() {
    return src('./src/**/*.js').pipe(dest('dist/'));
}

function clear() {
    return deleteSync('dist/**');
}

function serve() {
    watch('./src/views/**/**.html', series(html)).on('change', sync.reload);
    watch('./src/scss/**.scss', series(scss)).on('change', sync.reload);
    watch('./src/**/**.js', series(script)).on('change', sync.reload);
    watch('src/icons/*.+(png|svg)', series(icons)).on('change', sync.reload);
    watch('src/images/*.+(png|svg)', series(images)).on('change', sync.reload);
}

export default async function watchNode() {
    sync.init({
        proxy: {
            target: 'localhost:3020',
        },
        open: false,
    });

    clear();
    html();
    scss();
    images();
    icons();
    script();

    nodemon({
        ext: 'js',
        script: './dist/index.js',
    }).on('start', function () {
        serve();
    });
}
