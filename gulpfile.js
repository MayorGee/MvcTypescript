import gulp from 'gulp';
import nodemon from 'gulp-nodemon';
import gulpSass from 'gulp-sass';
import dartSass from 'sass';
import csso from 'gulp-csso';
import autoprefixer from 'gulp-autoprefixer';
import browserSync from 'browser-sync';
import { deleteAsync } from 'del';
import ts from 'gulp-typescript';

const { src, dest, series, parallel, watch } = gulp;

const tsProject = ts.createProject('tsconfig.json');
const sass = gulpSass(dartSass);
const sync = browserSync.create();

function scss() {
    return src('./src/scss/styles.scss')
        .pipe(sass())
        .pipe(
            autoprefixer({
                overrideBrowserslist: ['>1%'],
            }),
        )
        .pipe(csso())
        .pipe(dest('./dist/css'));
}

function liquid() {
    return src('./src/templates/**/*.liquid')
        .pipe(dest('dist/templates'));
}

function images() {
    return src('./src/images/*.+(png|svg|jpg|webp)')
        .pipe(dest('dist/images'))
}

function icons() {
    return src('src/icons/*.+(png|svg|jpg|webp)')
        .pipe(dest('dist/icons'))
}

function script() {
    return src('./src/**/*.js')
        .pipe(dest('dist/'));
}

function typescript() {
    return src('./src/**/*.ts')
        .pipe(tsProject())
        .pipe(dest('dist/'));
}

function clear() {
    return deleteAsync('dist/**');
}

function serve() {
    watch('./src/views/**/**.liquid', series(liquid)).on('change', sync.reload);
    watch('./src/scss/**.scss', series(scss)).on('change', sync.reload);
    watch('src/icons/*.+(png|svg|jpg|webp)', series(icons)).on('change', sync.reload);
    watch('src/images/*.+(png|svg|jpg|webp)', series(images)).on('change', sync.reload);
    watch('./src/**/**.js', series(script)).on('change', sync.reload);
    watch('./src/**/**.ts', series(typescript)).on('change', sync.reload);
}

async function startBRowserSync() {
    sync.init({
        proxy: {
            target: 'localhost:3333',
        },
        open: false,
    });
}

async function startNodemon() {
    nodemon({
        ext: 'js',
        script: './dist/index.js',
    }).on('start', function () {
        serve();
    });
}

const watchNode = parallel(
    startBRowserSync,
    series(
        clear,
        liquid,    
        scss,
        images,
        icons,
        script,
        typescript,
        startNodemon
    )
)

export default watchNode;