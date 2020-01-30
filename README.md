# ClubPetro

Repositório destinado aos projetos de frontend e backend do projeto ClubPetro. O frontend foi desenvolvido com ReactJS e o backend foi desenvolvido com NodeJS utilizando como banco de dados o MySQL.

Para começar, faça o download do sistema com um _git clone_.
```
git clone https://github.com/marcosrodriigues/clubpetro.git
&& cd clubpetro
```
Dentro da pasta clubpetro há duas pastas, [frontend](https://github.com/marcosrodriigues/clubpetro/tree/master/frontend) e [backend](https://github.com/marcosrodriigues/clubpetro/tree/master/backend). Cada página é referente a uma camada do  sistema clubpetro.  A seguir é apresentado cada projeto e como executá-lo.

## frontend

Na pasta [frontend](https://github.com/marcosrodriigues/clubpetro/tree/master/frontend) se encontra o frontend do projeto. As tecnologias que envolvem o projeto estão listadas abaixo:
- Yarn v1.21.1
- Npm v6.13.4
- Node v12.14.1

Vamos começar instalando todas as dependências do projeto. Para isso, acesse a pasta _frontend_ e execute o comando _npm install_
 ```
cd frontend && npm install
```

Aguarde o _npm install_ terminar de executar. Isto pode levar alguns minutos. Depois, é só executar _yarn start_
```
yarn start
```
Após o projeto iniciar, acesse seu _[localhost](http://localhost:3000/)_ para navegar na aplicação.

## backend

Na pasta [backend](https://github.com/marcosrodriigues/clubpetro/tree/master/backend) se encontra o backend do projeto. As tecnologias que envolvem o sistema estão descritas abaixo:
- NodeJS v12.14.1
- MySQL v5.7
- Yarn v1.21.1
- Npm v12.14.1

Vamos começar instalando todas as dependências do projeto. Para isso, acesse a pasta _backend_ e execute o comando _npm install_
 ```
cd backend && npm install
```

Aguarde o _npm install_ terminar de executar. Isto pode levar alguns minutos. Depois, é só executar _yarn dev_
```
yarn dev
```
Após o projeto iniciar, acesse seu _[localhost](http://localhost:3000/)_ para navegar na API.

Você também pode acessar a pasta [backend](https://github.com/marcosrodriigues/clubpetro/tree/master/backend)  e conhecer todos os endpoints da aplicação, detalhados no README.md