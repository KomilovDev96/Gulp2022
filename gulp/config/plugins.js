import replace from 'gulp-replace'; //поиск и замена 
import plumber from 'gulp-plumber'; //Обработка ощибок 
import notify from 'gulp-notify';// Сообшения подсказки 
import browsersync from 'browser-sync'; //Локальный сервер
import newer from 'gulp-newer'; // Проверка Обнавление картинки




// Экспортируем обекты
export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    browsersync: browsersync,
    newer: newer,
}