# Simulador financiamento de veículos

### Para iniciar o projeto, siga os passos abaixo

#### Configurar .env

- Duplique o arquivo `./backend/.env.example` e renomei-o para `.env`
- Duploque o arquivo `./frontend/.env.example` e renomei-o para `.env`

#### Rode o container docker

```bash
docker compose up --build -d
```

#### Acesse o container

```bash
docker exec -it backend-laravel /bin/bash
```

#### Rode as migrations

```bash
php artisan migrate
```

#### Execute a seed para popular o banco de dados

```bash
php artisan db:seed --class=VehiclesSeeder
```

## Frontend (Acesse a interface da aplicação por aqui)

- Disponível em: [http://0.0.0.0:3000](http://0.0.0.0:3000)

## Backend

- Disponível em: [http://0.0.0.0:8000](http://0.0.0.0:8000)

## PostgreSql

- Disponível em: [http://0.0.0.0:5432](http://0.0.0.0:5432)
- User: postgres
- Password: postgres
- Database: vehicles
