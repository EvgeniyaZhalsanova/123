# Домашнее задание к занятию «DevSecOps и AppSec. Часть 2»

Воросы можно писатв через лиичный кабинет, а также через доску вопросов на сайте.

## Описание
Домашнее задание — лабораторная работа, в которой вы по инструкциям выполните действия.Обратите внимание, что домашнее задание является необязательным. Его выполнение не повлияет на получение зачёта по модулю.

Примерное время выполнения задания — 120 минут.

Срок выполнения задания, с момента открытия — не более 5 дней.

Срок доработки задания — не более 3 дней.

Формат сдачи задания — продемонстрировать успешную сборку проекта в пайплайне. 

Критерии оценивания: зачёт/доработка/незачёт 


## Работа с GitVerse
В этом задании применяется сервис GitVerse — платформа для хостинга Git-репозиториев, контроля версий кода и совместной разработки, являющееся одним из популярных решений для поддержки DevOps и DevSecOps.

Вы будете использовать заранее подготовленные материалы для упрощения настройки и развёртывания исследуемого прриложения.

При выполнении работы будут получены навыки работы с инструментарием, который используется DevSecOps в работе. 

При выполнении работы предполагается самостоятельная и последующая работа с документацией.

### Создание учетной записи GitVerse
1. Перейдите на домашнюю страницу [GitVerse](https://gitverse.ru/) и нажмите **Войти** или **Начать работу**:
![](https://gitverse.ru/docs/_next/static/media/authorizationButton.c88dba9b.png)
2. Нажмите **Войти**:
![](https://gitverse.ru/docs/_next/static/media/registrationPageEnterButton.9799ba27.png)
3. Нажмите **Зарегистрироваться**:
![](https://gitverse.ru/docs/_next/static/media/cloudRuLoginPageRegisterButton.475090b4.png)
4. Введите свой email, нажмите **Подтвердить** (отправить письмо с кодом) и следуйте дальнейшим инструкциям для заведения учётной записи: 
![](https://gitverse.ru/docs/_next/static/media/registrationEnterEmail.b426f019.png)
В качестве способа Дополнительной защиты выберите Двухфакторная аутентификация (по одноразовому коду).

5. Далее выбираем предпочитительный почтовый ящик (для получаения уведомлений от сервера) и имя пользователя.
![](reg.png)

![](final.png)



### Импорт учебного проекта
Для добавления учебного проекта к себе в репозиторий небходимо:
1. На верхней панели элементов нажимаем на **+ Добавить**, **Импорт репозитория**
![](import.png)
![](import2.png)

2. Далее выбираем сервис откуда добавляется репозиторий (github)
3. В поле **URL откуда импортируем** указываем адрес:  `https://github.com/netology-code/ib-devsecops-app.git`
Здесь надо обновить ссылку
4. В поле **Название репозиория** задаём имя репозитория. Остальные поля опциональны и не требует заполнения, поэтому пропускаем их.
5. Нажимаем на кнопку **Импортировать репозиторий**, в результате чего получаем импортированную копию учебного проекта в своём гите.
![](importResult.png)

Учебный проект состоит из типового приложения nodejs и конфигурационных файлов, задающих процесс сборки.

### Создание репозитория с нуля
При необходимости можно создать репозиторий с нуля, для этого необходимо нажать на кнопку **Добавить**, **Новый репозиторий**
![](newRepo.png)
Обязательной информацией для создания репозитория является имя (а также видимость: публичный/приватный), однако рекомендуется также инициализировать репозиторий с файлами README (отображает информацию на странице репозитория, формат md) и .gitignore (перечисляются файлы, которые гит должен игнорировать, как правило системные/служебные файлы, используемые в работе)

### Процесс разработки ПО (CI/CD)
Процесс разработки ПО состоит из
процессов интеграции ПО (Continuous Integration, CI) и процессов развёртывания ПО (Continuous Deployment, CD) (подробнее см. [здесь](https://ru.wikipedia.org/wiki/CI/CD)). 
Задачи, связанные с исполнением процессов разработки решаются с помощью раннеров
[**подробнее о раннерах!**](https://gitverse.ru/docs/knowledge-base/actions/runners/)

### Подключение локального раннера
Скачать подходящий для платформы раннер можно по следующей ссылке: [**скачать**](https://gitverse.ru/docs/knowledge-base/actions/runners/#%D1%81%D1%81%D1%8B%D0%BB%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D1%81%D0%BA%D0%B0%D1%87%D0%B8%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F).

Для подключения раннера необходимо его связать с проектом - зарегистрировать. Для этого необходимо открыть настройки проекта (кнопка **Настройки**)
![](Settings.png)

выбрать вкладку Раннеры, нажать кнопку **Добавить раннер** и скопировать **сгенерированный токен**, который использующийся для подключения раннера к проекту.
![](runners.png).

Скачав бинарный файл раннера, делаем его исполняемым и убеждаемся что он работает (проверка его работы выполняется запуском приложения раннера с ключом **-version**). 
Аргумент **register** вызывает интерактивный режим регистрации раннера, который интерактивно запросит требуемую для работы раннера инфорацию
![](Check.png).
Вновь открываем настройки проекта,на вкладке раннеры появился наш раннер (в неактивном режиме)
![](checkRunners.png).
Для того чтобы раннер работал в "активном режиме", т.е. постоянно, получая инструкции от сервера используется аргумент **daemon**.

### Построение пайплайна
1. Пайплайн - это набор инструкций.
Пайплайн описывается с в специальных конфигурационных файлах, на языке разметки yaml, размещаемых в каталоге **.gitverse/workflows/**.

Для учебного проекта заданы две стадии: **build** и **deploy**, описав их в файле ci.yaml:

```
name: Study
on:
  workflow_dispatch:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
stages:
    - build-stage
    - deploy-stage

build:
    stage: build-stage
    script:
        - npm install
    artifacts:
        untracked: false
        when: on_success
        paths:
            - node_modules
            - package-lock.json

deploy:
    stage: deploy-stage 
    image: node
    script:
        - chmod +x deploy.sh
        - bash deploy.sh`
```        
На этапе **build** выполняется сборка и установка нашего приложения (команда **npm install**). 

На этапе **deploy** выполняется запуск нашего приложения c помощю следующего sh-скрипта:

```  
#! /bin/bash
# Ищем и останавливаем работающий процесс npm проверяя файл, в котором записан номер процесса, когда процесс npm уже работает

if [ -f pidfile.txt ]; then
  PID=$(cat pidfile.txt)
  kill $PID
  rm pidfile.txt
else
  echo "pidfile.txt not found. No process to stop."
fi

# Запускаем процесс npm в фоновом режиме, сохраняя номер этого процесса в файл pidfile.txt
npm start > /dev/null 2>&1 & 
PID=$!
echo "Started npm start with PID: $PID"
echo $PID > pidfile.txt

# Далее можно добавлять команды для раннера, при необходимости

# При отсутствии проблем скрипт завершится с успехом	
exit 0
```  

Важные указания при выполнении работы:

1) для работы локального раннера необходимо наличие установленного докер окружения и работы службы докера в фоне. Подробнее см. [здесь](https://gitverse.ru/docs/actions-conf/runners-uc/#%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0-docker-ubuntu).

2) для демонстрации пайплана можно воспользоваться преимуществами gitverse и использовать облачнный раннер, запускать который не требуется (Подробнее см. [здесь](https://gitverse.ru/docs/actions-conf/cloud-runners-uc/)). В случае использвания облачного раннера допускается использовать сборку произвольного проекта.

3) Для закрепления и усвоения изученной информации, при отправке задания на проверку, в тексте ответьте своими словами на следующие вопросы:
	- что такое раннер и для чего он используется?
	- каким образом можно управлять раннером?
	- перечислите возможные меры безопасности по управлению раннером?
