# Simulador financiamento de veículos

### Para iniciar o projeto, siga os passos abaixo

#### Configurar .env

- Duplique o arquivo `./backend/.env.example` e renomei-o para `.env`
- Duplique o arquivo `./frontend/.env.example` e renomei-o para `.env`

#### Rode o container docker

```bash
docker compose up --build -d
```

#### Rode as migrations

```bash
docker exec -it backend-laravel php artisan migrate
```

#### Execute a seed para popular o banco de dados

```bash
docker exec -it backend-laravel php artisan db:seed --class=VehiclesSeeder
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

## Testes unitários

### Backend

```bash
docker exec backend-laravel php artisan test
```

### Frontend

```bash
docker exec front-end-next npm run test
```
