# フルスタックブログアプリ（Rails7 + Next.js）

https://www.youtube.com/watch?v=XQtkP8it9Ag&t=1133s をベースにフルスタックブログアプリを作成しています。

## 開発環境

- MySQL : 8.0

- Ruby : 3.2.2

- Rails : 7.1.3

- Node.js : 18.17.1

- Next.js : 14.1.0

## CRUD 操作の土台を作る

```
docker-compose -f docker-compose-dev.yml exec backend bundle exec rails g scaffold Post title:string context:text start_time:datetime end_time:datetime status:integer
```
