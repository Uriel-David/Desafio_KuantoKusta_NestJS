# Desafio para vaga back-end - Nest.js (KuantoKusta)

## Instalar dependências do projeto
É necessário rodar o `npm install` em cada uma das pastas dos projetos. As bases de dados foram construídas usando docker, e apenas é necessário usar o comando `docker-compose up -d --build`.

## Iniciar o projeto
Para iniciar o projeto, basta entrar em cada pasta do projeto e rodar o comando `npm run start:dev`, e na raíz do projeto basta usar o comando `docker-composer up -d` caso não tenha iniciado o docker ainda.

**Obs.: Lembrar de copiar o .env.example para um arquivo .env no projeto store-api.**

## Informações das Rotas do projeto
O projeto tem 7 endpoints, 6 desses endpoints é necessário estar auntenticado, para isso é necessário usar o endpoint `http://localhost:3001/login` (usar método POST) para conseguir o token e usar nas requisições da API, exemplo para conseguir um token:

{
    "username": "user1@user.com",
    "password": "123456"
}

Os outros endpoints são esses:

### Endpoints Produtos
http://localhost:3001/store/products - GET (Retorna todos os produtos)

http://localhost:3001/store/products - POST (Cria um novo produto)
 - Exemplo de Body:
 {
    "productId": "654321",
    "price": 200.00
 }

### Enpoints Carrinho
http://localhost:3001/store/carts - GET (Retorna todos os carrinhos)

http://localhost:3001/store/carts/:userId - GET (Retorna apenas o carrinho do usuário)

http://localhost:3001/store/carts - POST (Cria um novo carrinho ou adiciona um novo produto ao carrinho se já existir)
 - Exemplo de Body:
 {
    "userId": "1",
    "totalPrice": 100,
    "totalQuantity": 1,
    "products": [
        {
            "productId": "123456",
            "price": 100,
            "quantity": 1
        }
    ]
 }

http://localhost:3001/store/carts/:shoppingCartId - PUT (Atualiza o carrinho)
 - Exemplo de Body:
 {
    "userId": "1",
    "totalPrice": 200,
    "totalQuantity": 2,
    "products": [
        {
            "productId": "123456",
            "price": 100,
            "quantity": 2
        }
    ]
 }

 ----------------------------------------------------------------------------------------

 # Challenge for backend role - Nest.js (KuantoKusta)

## Install project dependencies
It is necessary to run `npm install` in each of the project folders. The databases were built using docker, and it is only necessary to use the `docker-compose up -d --build` command.

## Start the project
To start the project, just enter each project folder and run the command `npm run start:dev`, and at the root of the project just use the command `docker-composer up -d` if you haven't started docker yet.

**Note: Remember to copy the .env.example to an .env file in the store-api project.**

## Project Route Information
The project has 7 endpoints, 6 of these endpoints must be authenticated, for this it is necessary to use the `http://localhost:3001/login` endpoint (use the POST method) to obtain the token and use it in API requests, for example to get a token:

{
    "username": "user1@user.com",
    "password": "123456"
}

The other endpoints are these:

### Endpoints Products
http://localhost:3001/store/products - GET (Returns all products)

http://localhost:3001/store/products - POST (Create a new product)
 - Body example:
 {
    "productId": "654321",
    "price": 200.00
 }

### Enpoints Cart
http://localhost:3001/store/carts - GET (Returns all carts)

http://localhost:3001/store/carts/:userId - GET (Returns the user's cart only)

http://localhost:3001/store/carts - POST (Creates a new cart or adds a new product to the cart if it already exists)
 - Body example:
 {
    "userId": "1",
    "totalPrice": 100,
    "totalAmount": 1,
    "products": [
        {
            "productId": "123456",
            "price": 100,
            "quantity": 1
        }
    ]
 }

http://localhost:3001/store/carts/:shoppingCartId - PUT (Update cart)
 - Body example:
 {
    "userId": "1",
    "Total price": 200,
    "total amount": 2,
    "products": [
        {
            "productId": "123456",
            "price": 100,
            "quantity": 2
        }
    ]
 }