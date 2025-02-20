Области хранения данных:

-   база данных на json-server
-   эмулятор BFF
-   redux store

Сущности приложенея:

-   пользователи: БД(здесь будет храниться весь список пользователей), BFF(сессия текущего пользователя), стор(отображение в браузере)
-   статья: БД(список всех статей), стор(отображение в браузере)
-   комментарий: БД(список всех комментариев), стор(отображение в браузере)
-   профиль: БД(список всех профилей пользователей), стор(отображение профиля в браузере)
-   питомцы: БД(список всех птомцев, привязанных к пользователямм), стор(отображение в профиле пользователя)
-   услуги: БД(список всех услуг), стор(отображение в браузере)
-   посты: БД(список всех постов на форуме)б стор(отображение в браузере)
-   медиа: БД(список всех медиа, привязанных к статьям), стор(отображение в браузере)

Таблицы БД:

-   Таблица Users

    -   id (PK)
    -   email
    -   password
    -   role ('user', 'admin')

-   Таблица Profiles

    -   id (PK)
    -   user_id (FK)
    -   surname
    -   first_name
    -   last_name
    -   phone
    -   address
    -   created_at

-   Таблица Pets

    -   id (PK)
    -   user_id (FK)
    -   name
    -   type ('dog', 'cat', и тп)
    -   breed (пород)
    -   age
    -   weight
    -   description
    -   created_at

-   Таблица Services

    -   id (PK)
    -   user_id (FK)
    -   title
    -   description
    -   price
    -   user_email
    -   address
    -   created_at

-   Таблица ForumPosts

    -   id (PK)
    -   user_id (FK)
    -   title
    -   content
    -   created_at

-   Таблица Comments

    -   id (PK)
    -   post_id (FK)
    -   user_id (FK)
    -   content
    -   created_at

-   Таблица Articles

    -   id (PK)
    -   title
    -   content
    -   created_at

-   Таблица Media
    -   id (PK)
    -   article_id (FK)
    -   source

Схема состояния на BFF:

-   сессия текущего пользователя
    -   email
    -   password
    -   role

Схема для Redux Store:

-   user:

    -   id
    -   email
    -   role

-   profile

    -   id
    -   userId
    -   surname
    -   firstName
    -   lastName
    -   phone
    -   address
    -   createdAt

-   pets - массив pet

    -   pet
        -   id
        -   userId
        -   name
        -   type ('dog', 'cat', и тп)
        -   breed (порода)
        -   age
        -   weight
        -   description

-   services - массив service

    -   id
    -   userId
    -   title
    -   description

-   service

    -   id
    -   userId
    -   title
    -   description
    -   price
    -   email
    -   address
    -   createdAt

-   forumPosts - массив post

    -   id
    -   userId
    -   title
    -   content
    -   createdAt

-   post

    -   id
    -   userId
    -   title
    -   content
    -   createdAt
    -   comments - массив comment
        -   id
        -   userId
        -   content
        -   createdAt

-   articles - массив article

    -   id
    -   title
    -   content

-   article

    -   id
    -   title
    -   content
    -   medias - массив media, которые привязаны к статье

-   medias
    -   id
    -   articleId
    -   source
