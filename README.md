# todol
Чтобы запустить фронтэнд сервер, в терминале находясь в папке todo-front пишем:
  `npm i`
  `npm start`

В MongoDB создать коллекцию, в неё импортировать данные из tddb.json.
В папке todo-api в папке credentials вставить MongoDB URI на созданную коллекцию.

Чтобы запустить бэкэнд сервер, в терминале находясь в папке todo-api пишем:
  `npm i`
  `node server.js`

  Из того, что очень хотелось, но не удалось: Хотел сделать, чтобы при отметке в чекбоксе, задача отмечалась как выполненная в БД, а на фронте становилась неактивной. Но получалось либо все задачи становились выполнеными, либо вовсе не отмечались.