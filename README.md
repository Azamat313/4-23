# 4-23

Простая система управления задачами (MVP)
1. Основные функции
Авторизация
Только два типа пользователей: админ и обычный пользователь
Простая форма входа (логин/пароль)
Выход из системы

ЗадачиСоздание задачи (название, описание, срок)
Просмотр списка задач
Редактирование задачи
Удаление задачи

Статусы задач (простые)Новая
В работе
Завершена

Приоритеты (базовые)Высокий
Средний
Низкий

3. Интерфейс
Главная страница
Список всех задач
Кнопка создания новой задачи
Простая фильтрация по статусу
Информация о текущем пользователе

Форма задачиНазвание
Описание
Выбор приоритета
Дата выполнения
Назначение исполнителя (только для админа)

4. Права пользователей
Админ можетСоздавать задачи
Назначать исполнителей
Редактировать все задачи
Удалять задачи
Видеть все задачи

Пользователь можетВидеть назначенные ему задачи
Создавать задачи для себя
Менять статус своих задач
Редактировать свои задачи

5. Хранение данныхВсе данные хранятся в localStorage
Простая структура без вложенных объектов
Минимум необходимых полей

6. Функциональность MVP
Обязательные функцииВход/выход из системы
Создание задачи
Просмотр списка задач
Изменение статуса задачи
Назначение исполнителя (для админа)

Базовый интерфейсСтраница входа
Список задач
Форма создания/редактирования
Простая фильтрация
