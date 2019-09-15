# API Для работы с локальными git репозиториями

Все запросы возвращают данные в формате json.

###Настройка

Для первого запуска необходимо в корне создать файл `.env`, содержимое взять из файла `.env.example`, и изменить параметры под собственные требования.

###Запуск

Для запуска выполнить команду:
>npm run server --path=:pathToRepositories

####Параметры:

* `pathToRepositories` - путь до рабочей папки, где хранятся репозитории

###API

В случае ошибки будет возвращен объект с текстом ошибки:
```json
{
  "error": "error text"
}
```

##GET /api/repos

Возвращает массив репозиториев, которые имеются в папке.

####Response:
```json
{
   "repositories": [
        {
          "name": "yndx-shri-nodejs"
        },
        {
          "name": "yndx-shri-task_1"
        }
   ]
}
```

##GET /api/repos/:repositoryId/commits/:commitHash/page/:page

Возвращает массив коммитов в данной ветке (или хэше коммита) вместе с датами их создания и названием.

####Параметры:

* `repositoryId` - название папки с репозиторием
* `commitHash` - хэш комита или название ветки, параметр не обязательный 
* `page` - номер страницы, если не указана то считается что это первая страница

####Response:

```json
{
   "commits": [
       {
           "hash": "a4bd09e65ed3027e3c4adb2ec31c934ee52e7ce9",
           "timestamp": "1564128799",
           "source": "Запилил клевую штуку"
       }
   ]
}
```

####Примеры запросов:

* /api/repos/cool-timer/commits/cool-branch
* /api/repos/cool-timer/commits/cool-branch/page/34
* /api/repos/cool-timer/commits/page/24

##GET /api/repos/:repositoryId/commits/:commitHash/diff

Возвращает diff коммита в виде строки.

####Параметры:
* `repositoryId` - название папки с репозиторием
* `commitHash` - хэш комита или название ветки, параметр не обязательный 

####Response:

```json
{
  "diff": {
    "src/file.js": {
      "filePath": "README.md",
      "filePathOld": "README_old.md", //Присутствует только при mode = R
      "mode": "M",
      "diff": "--- a/README.md\n+++ b/README.md\n@@ -1 +1,60 @@\n-# yndx-shri-nodejs\n\\ No newline at end of file..."
    }
  }
}
```

##GET /api/repos/:repositoryId(/tree/:commitHash/:path)

Возвращает содержимое репозитория по названию ветки (или хэшу комита). Параметр repositoryId - название репозитория (оно же - имя папки репозитория). То, что в скобках - опционально, если отсутствует и branchName, и path - отдать актуальное содержимое в корне в главной ветке репозитория.

####Параметры:

* `repositoryId` - название папки с репозиторием
* `commitHash` - хэш комита или название ветки, параметр обязательный если указан параметр `path` 
* `path` - путь до папки, структуру которого нужно получить, параметр не обязательный 

####Response:

```json
{
  "files": [
    "collect_1920.png",
    "collect_600.png"
  ]
}
```

####Примеры запросов:

* /api/repos/cool-timer
* /api/repos/cool-timer/tree/cool-branch/src/components
* /api/repos/cool-timer/tree/master/src/components
* /api/repos/cool-timer/tree/e1r2r32b321bdad2e1knbh231
* /api/repos/cool-timer/tree/e1r2r32b321bdad2e1knbh231/src/components

##GET /api/repos/:repositoryId/blob/:commitHash/:pathToFile

Возвращает содержимое конкретного файла, находящегося по пути pathToFile в ветке (или по хэшу коммита) branchName. С используемой памятью должно быть все в порядке.

####Параметры:

* `repositoryId` - название папки с репозиторием
* `commitHash` - хэш комита или название ветки
* `pathToFile` - путь до файла, содержимое которого нужно вернуть

####Response:

```json
{
  "fileBlob": "{\n  \"name\": \"yndx-shri-task_1\"\n}"
}
```

####Примеры запросов:

* /api/repos/cool-timer/blob/cool-branch/src/components/Header/index.tsx

##DELETE /api/repos/:repositoryId

Безвозвратно удаляет репозиторий

####Параметры:

* `repositoryId` - название папки с репозиторием

####Response:

```json
{
  "result": true
}
```

##POST /api/repos/:repositoryId + { url: ‘repo-url’ }

Добавляет репозиторий в список, скачивает его по переданной в теле запроса ссылке и добавляет в папку со всеми репозиториями.

####Параметры:

* `repositoryId` - название папки с репозиторием, параметр не обязательный. Если не указан, то репозиторий сколонируется в папку с названием, взятым из имени репозитория

####POST данные в формате `json`:

* `url` - путь до репозитория

####Response:

```json
{
  "result": true
}
```
