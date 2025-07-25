# Курсовая работа «E-Commerce». Профессия «Специалист по информационной безопасности»

## Описание

Компания Y предоставляет комплексное веб-приложение в сфере электронной коммерции `Necommerce`. Компания недавно столкнулась с массовой утечкой данных о своих пользователях и их покупках. «Брешь», через которую произошла утечка, вроде как устранили.

Саму разработку приложения компания Y заказывает у подрядчика — фирмы-разработчика.

Своих специалистов по информационной безопасности у компании Y нет, поэтому вас пригласили провести комплексный анализ процесса разработки и протестировать на наличие других веб-уязвимостей. Детали по найденным и исправленным уязвимостям не дали, так как вы профессионал и должны проверить всё с начала.

Разработчики со стороны подрядчика также максимально пошли вам на встречу и предоставили исчерпывающую информацию о приложении — две ссылки на репозитории с кодом:
* [Frontend](https://github.com/netology-code/necommerce-frontend).
* [Backend](https://github.com/netology-code/necommerce-backend).

**По словам разработчиков:**
1. Вся разработка ведётся в приватных репозиториях в GitHub. *Это легенда, для удобства мы вам дали открытые репозитории*.

2. Весь код, а также зависимости и контейнеры, регулярно  проходят проверку открытыми инструментами:
    * [Dependabot](https://dependabot.com).
    * [GitHub Secret Scaning](https://docs.github.com/ru/code-security/secret-scanning/about-secret-scanning)
    * [SonarQube](https://docs.sonarsource.com/sonarqube/latest/)
    * [Semgrep](https://semgrep.dev/)
    * [Trivy](https://trivy.dev/)
    
3. Сам код покрыт автоматическими тестами, включая проверку механизмов безопасности (отработка неверных логинов и паролей), которые регулярно прогоняются при каждом push в репозиторий.

4. Разработчики прекрасно знакомы с `OWASP Top 10`, а некоторые даже с `ASVS` и `WSTG`.

5. Они придерживаются строгих правил разработки и не разрешают отправлять `push` в `master` без соответствующего `Code Review` как минимум двух человек и прохождения автоматизированных проверок.

6. После прохождения всех проверок автоматически собираются образы `Docker` и публикуются в `GitHub Container Registry` для дальнейшего разворачивания в Production.

Отчёты этих инструментов скрыты из публичного доступа. При желании вы можете `Fork`'нуть/скопировать к себе репозиторий и самостоятельно настроить репозиторий, либо обратиться к руководителю курса, чтобы он вас добавил временно в репозиторий для просмотра настроек инструментов.

## Инструкция по запуску исследуемых сервисов

Для запуска сервисов используется Docker-compose, со следующим конфигурационным файлом:
**docker-сompose.yml**:

```
version: '3.7'
services:
  backend:
    image: ghcr.io/netology-code/necommerce-backend
    ports:
      - 9999:9999
  frontend:
    image: ghcr.io/netology-code/necommerce-frontend
    environment:
      - API=http://backend:9999
      - MEDIA=http://backend:9999
    ports:
      - 8888:80
    depends_on:
      - backend
```

## Задача курсовой работы

Выполнить комплексное исследование функционирующего приложения и исходных кодов. Обратите внимание на код приложения, всё ли в порядке с зависимостями, верно ли собираются контейнеры и т.д. Для этого выделяют следующие этапы курсовой работы:

1. Планирование.
2. Выполнение.
3. Подготовка отчёта.

Критерии оценивания: зачёт/доработка/незачёт.


#### Планирование

После начала работы над дипломом в течение **3 рабочих дней** вы должны сдать руководителю план работ, в котором описано:

* что вы будете проверять;
* как вы будете это проверять: инструменты, подходы, используемые нормативные документы, стандарты или руководства;
* интервальная оценка с учётом рисков в часах на каждую из проверок.

Руководитель выступает в роли представителя по стороны Заказчика, поэтому именно он определяет правила выполнения и сдачи работ. Если его требования расходятся с указанными в этом документе, то приоритет имеют требования руководителя.

Руководитель может скорректировать ваш план работ, указав:

* какие работы делать не нужно;
* какие работы нужно сделать дополнительно.

**Критерий выполнения:** составлен и утверждён план предстоящих работ (с учётом вышеизложенными рекомендациями по составлению плана работ).

#### Этап выполнения

На этом этапе вы выполняете работу. Можете консультироваться с руководителем по поводу вопросов, требующих уточнения. Например: является ли данная функциональность запланированной или нет.

**Критерий выполнения:** 
проведены запланированные проверки в соответствии с планом работ;
процесс проверок хорошо описан, а результаты задокументироованы;
проведён анализ полученных результатов;
по каждому из полученных результатов приведено заключение (указаны рекомендации если требуется), с резюимированием в виде общего вывода.

**Срок выполнения**: согласовывается с экспертом, но не более 7 дней с момента утверждения плана

#### Подготовка отчёта

Полученные в ходе планирования и выполнения результаты оформляются в виде единого документа - отчёта.

В отчёте формируется общее заключение по результатам выполненных работ, включающее рекомендации по улучшению текущего процесса разработки.
При указании рекомендаций обязательно должна быть ссылка на источник рекомендаций.

Шаблон, который можно использовать для оформления отчёта приведён в файле **template.docx**.

**Критерий выполнения:**
сформирован отчёт о результатах выполненных работ.

## Критерии сдачи курсовой работы

Подготовленный отчёт принят экспертом.

При наличии у эксперта замечаний по результам проверки формируется перечень рекомендаций по доработке (исправлению) курсовой работы.

Срок доработки по результаткам замечаний — не более 3 дней.

