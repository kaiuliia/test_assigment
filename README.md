## Blog Posts Management

This is a basic blog application made with Laravel, SQLite and React.

## Features
- User authentication
- Viewing all blog posts
- Blog post management (create, update, delete)

## Getting started

### Install
- PHP
- Composer
- Laravel
- Node JS & NPM

### Clone the repository
```bash
git clone git@github.com:kaiuliia/test_assigment.git
```

### Install backend dependencies
```bash
composer update
```

### Install frontend dependencies
```bash
npm install
```

### Configure the environment
First, copy `.env.example` file to `.env` file.
Then, set the absolute path to the SQLite database file
by updating `DB_DATABASE` property in the file.

```
DB_DATABASE=<absolute path to SQLite database file>/database.sqlite
```

### Run migrations
```bash
php artisan migrate
```

### Run the frontend
```bash
npm run dev
```

### Run the backend
```bash
php artisan serve
```

### Open the application
Open the application in your browser at http://localhost:8000

## API
The backend implements the following APIs for managing blog posts:
- `GET /api/posts` lists all blog posts
- `GET /api/posts/{id}` get blog post
- `POST /api/posts` creates a blog post
- `PUT /api/posts/{id}` updates a blog post
- `DELETE /api/posts/{id}` deletes a blog post
