#!/bin/bash

# Обновляем пакеты
sudo apt update
sudo apt upgrade -y

# Очищает кэш
sudo apt autoclean
sudo apt autoremove -y

# Выводим сообщение об успешном завершений
echo "Система успешно обновлена"
