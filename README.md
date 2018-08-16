## Github Visualizer

Uma nova forma de ver as informações de usuários e um mapa com sua localização

### [DEMO](http://201.49.15.60:8080)

## Funcionamento

Você precisa autorizar o Github Visualizer acessar algumas informações sua por meio da API go Github, depois disso você será direcionado a uma tela com um campo de busca, você poderá procurar por nome de usuários, ao pressionar enter ou clicar sobre o botão de busca será exibido um card com dados do usuário e outro com a localização do usuário procurado sobre um mapa.

## Autorização
A aplicação consome uma API do github e para isso utiliza OAuth para autenticação do usuário, para mais informações leia:  

#### [Building OAuth Apps](https://developer.github.com/apps/building-oauth-apps/)


## Tecnologias
* React
* React-leaflet
* Redux
* Redux-persist
* Material-UI


## Instalação

Clone o projeto e depois instale as dependências com:   
```sh
npm install 

```
Para usar a aplicação é necessário subir uma API para fazer o intermédio da autorização, é necessário instalar as dependências do backend, recomendo o uso do PM2 para gerenciar o processo da API:

```sh
cd server
npm install
npm install -g pm2
pm2 start app.js
```
