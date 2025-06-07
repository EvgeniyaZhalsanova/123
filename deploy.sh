#! /bin/bash

# Ищем и останавливаем работающий процесс npm проверяя файл, в котором записан номер процесса
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