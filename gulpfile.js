import gulp from 'gulp';


// ипорт путей настроик
import {path} from './gulp/config/path.js';
import {plugins} from './gulp/config/plugins.js'

// Задачи 
import {copy} from './gulp/tasks/copy.js'
import {reset} from './gulp/tasks/reset.js'
import {html} from './gulp/tasks/html.js'
import {server} from './gulp/tasks/server.js'
import {scss} from './gulp/tasks/scss.js'
import {js} from './gulp/tasks/js.js'
import {images} from './gulp/tasks/images.js'


// Передаем значение в глабальную переменную
global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins
}



// Наблюдатель 
function watcher () {
    gulp.watch(path.watch.files, copy)
    gulp.watch(path.watch.html, html)
    gulp.watch(path.watch.scss, scss)
    gulp.watch(path.watch.js, js)
    gulp.watch(path.watch.images, images)
}

const mainTasks = gulp.parallel(copy, html, scss, js, images)

// Построение сценариев выполнение задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server))

// выполнение сценария по умолчанию
gulp.task('default', dev)

