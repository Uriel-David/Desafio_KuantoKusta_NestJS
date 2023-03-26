# Desafio para vaga back-end - Nest.js (KuantoKusta)

## Instalar dependências do projeto
É necessário rodar o `npm install` em cada uma das pastas dos projetos. As bases de dados foram construídas usando docker, e apenas é necessário usar o comando `docker-compose up -d --build`.

## Iniciar o projeto
Para iniciar o projeto, basta entrar em cada pasta do projeto e rodar o comando `npm run start:dev`, e na raíz do projeto basta usar o comando `docker-composer up -d` caso não tenha iniciado o docker ainda.

## Informações das Rotas do projeto
O projeto tem 7 endpoints, 6 desses endpoints é necessário estar auntenticado, para isso é necessário usar o endpoint `http://localhost:3001/login`, exemplo para conseguir um token:

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