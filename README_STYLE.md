# Описание по верстке

Реализация может немного отличаться от макета, т.к. использовались другие шрифты

В качестве минимальной ширины экрана был выбран размер в 360 пикселей

В качестве значения ширины при которой меняется верстка на мобильную было выбрано значение в 700 пикселей, 
т.к. 360 уже как минимальная, и при тех же 365 уже все выгляит не так призентабельно.

Эти точки переходов вынесены в файл с параметрами `src/scss/params.scss`.

Макеты находятся в папке `/public/`, там же скомпилированный `css`, только в подпапке `build/` вместе с картинками в `svg` формате.

Так же мной были написаны простенькие скрипты на скорую руку для перевода моих файлов стилей и страниц
на новое именование стилей, и прогнать файлы через них, т.к. когда получил рекомендацию на написание стилей по новому
было написано уже много кода, и руками переводить его было лень :).
Скрипты `src/reversBEM-html.js` и `src/reversBEM-sass.js`, запускаются с аргументом `--path` в который
передать относительный путь к папке с `scss` или `html` файлам соответственно. Папки они не переименовывают,
по-этому имено к сожалению остаются старыми.

Так же все работает если запустить `express` сервер, инструкция в начале файла `README.md`.

## Список реализованых страниц с функционалом:

### Макеты 1.1, 1.2, 1.3

Страницы реализованы на одном `html` файле, меню кликабельны, открываются средствами `css`,
но из-за этого страница прыгает при открытии. При оживлении страниц открытие (показ блоков) рекомендуется сделать на `js`.

Так же на этом макете показаны "хлебные крошки" из макета `1.4`.

На макете `1.1` т.к. содержимое таблицы сильно отличается в десктопном и мобильном вариантах, принял решение о реализации двух блоков по отдельности,
которые в дальнейшем будут отрисовываться средствами `js`, а сейчас реализованоно так, что бы показывался либо один либо другой блок

### Макет 1.4

Тут мне сказать почти не чего, т.к. эта страница в основном состоит из двух других, это `1.1.` и `1.5`.

### Макет 1.5

Реализован макет, подсветка кода сделана в рамках текущего макета, 
в дальнейшем возможно расширение типов подсвечиваемых элементов путем создания новых классов 
элементов в css (см. файл `src/scss/bem/code/code.scss`).

Сейчас реализована частичная подсветка кода для языков `make` и `java`.

Из мобильной версии реализован макет без горизонтального скрола

### Макет 1.6

Тут по реализации сказать не чего, реализован и все :)

### Макет 2.1

Тут тоже сказать сильно не чего, кроме того что сделан по аналогии с макетом `1.1`, только кол-во столбцов меньше

### Макет 3.1

Сделана подсветка кода так же как на макете `1.5`, мобильная версия реализована так же, без горизонтального скрола.

Единственное не понял про кнопку `Back`, на мобильном варианте она только есть, собственно там и была реализована
