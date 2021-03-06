<p align="center">
    <img src="./readme/banner.png" />
</p>

## 📑 Sumário
- [Sobre o Projeto](#-sobre-o-projeto)
- [Tecnologias utilizadas](#-tecnologias-utilizadas)
- [Design](#-design)
- [Licença](#-licença)


## 💡 Sobre o Projeto
Ecoleta é uma aplicação informa pontos de coleta de resíduos orgânicos/inorgânicos.

As empresas ou entidades poderão se cadastrar na plataforma web enviando:
- uma imagem do ponto de coleta
- nome da entidade, email e whatsapp
- e o endereço para que ele possa aparecer no mapa
- além de selecionar um ou mais ítens de coleta: 

Os usuários terão acesso ao aplicativo móvel, onde poderão:
- navegar pelo mapa para ver as instituições cadastradas
- entrar em contato com a entidade através do E-mail ou do WhatsApp


## 🚀 Tecnologias utilizadas
O projeto foi desenvolvido utilizando as seguintes tecnologias:

- ReactJS
- React Native
- TypeScript
- HTML5 e CSS3
- NodeJS


## 🎨 Design
Design feito por [Tiago Luchtenberg](https://www.instagram.com/tiagoluchtenberg/)

#### 🖥 Desktop
|<img src="./readme/Buscar.png" width="300">|<img src="./readme/Cadastro.png" width="300"> | <img src="./readme/Lista.png" width="300"> | 
|---|---|---|

### 📱 Mobile
|<img src="./readme/inicio-mobile.png" width=300 />|<img src="./readme/home-mobile.png" width=300 />|<img src="./readme/detalhes-mobile.svg" width=300 /> |  
|---|---|---|


## 🚀 Como desenvolver essa aplicação do zero


#  🚧 Em construção...🚧



# Ambiente de desenvolvimento Front-End: Criação da Base do Projeto com React - Aula 01 

## [Diretorio next-level-week]
Criar o aplicativo 'web' em React com template typescript

    npx create-react-app web --template=typescript

## [Terminal]
Executar o script 'start' que tem dentro do 'package.json' (a aplicação vai abrir no browser)

    npm start
    
## [Diretório web]
Remover os arquivos que não vamos utilizar: Readme
Na pasta public, deixar apenas o index.html
Na pasta src, deixar apenas: App.css, App.tsx, index.tsx, react-app-en.d.ts
Passar por cada arquivo restante e ir apagando os códigos que dependiam dos arquivos que apagamos.

## [Diretório src]
Criar uma pasta pages > Home
Pasta Home > index.tsx e styles.css
Pasta assets > logo e background

## [Terminal]

    npm install react-icons
    npm install react-router-dom
    npm install @types/react-router-dom -d
    npm install leaflet react-leaflet
    npm install @types/react-leaflet -d
    npm install axios




# Ambiente de desenvolvimento Back-End: Criação da Base do Projeto com NodeJS - Aula 01   

## [Diretório raíz]
Criar uma pasta 'server'


## [Terminal]

Iniciar o NPM na pasta (cria o arquivo 'package.json')

    npm init -y

Instalar o Express (cria a pasta 'node_modules' e o arquivo 'package-lock.json')
    
    npm install Express

Instalar a definição de tipos do Express

    npm install @types/express -d


Instalar o TypeScript

    npm install typescript -d


Instalar o TypeScript Node

    npm install ts-node -d


Criar um arquivo de configuração do typescript (cria o arquivo 'tsconfig.json')

    npx tsc --init
        

Instalar um pacote para reiniciar o servidor automaticamente

    npm install ts-node-dev -d


## [package.json]

Criar um script 'dev' para encurtar o comando de execução da aplicação

    "dev": "ts-node-dev src/server.ts"


## [Diretório server]
Criar uma nova pasta 'src'
Criar um arquivo 'server.ts' dentro dessa pasta

## [server.ts]
Escrever a primeira rota de listagem de usuários

## [Terminal]
Executar a aplicação

    npm run dev


## [Terminal]
Colocar em modo split para a aplicação ficar sempre rodando e instalar o knex e sqlite

    npm install knex
    npm install sqlite3

## [package.json]
Adicionar o script

    "knex:migrate": "knex migrate:latest --knexfile knexfile.ts migrate:latest"


## [VSCode]
Instalar o SQLite explorer. Ctrl + Shift + P > Sqlite: Open Database

## [Diretório src]
Criar um arquivo 'routes.ts' apenas para rotas

## [server.ts]
Importa o express, importa as rotas, armazena na variável app as definições de tipos do express, faz o express entender o formato json, faz o arquivo usar as rotas, faz o arquivo usar a porta 3333

## [Diretório src]
Criar a pasta 'database' para banco de dados e dentro dela o arquivo 'connection.ts'

## [connection.ts]
Importa o knex, importa biblioteca para lidar caminhos de diretórios, faz configurações do banco de dados, exporta a conexão 

## [Diretório database]
Criar uma pasta 'migrations' e dentro dela criar os arquivos das tabelas na ordem que respeita os relacionamentos '00_create_points.ts' / '01_create_items.ts' / '02_create_point_items.ts'.

## [Arquivos do diretório migrations]
Escrever os códigos que criam as tabelas. No 02, criar a tabela com a chave estrangeira.

## [Diretório database]
Criar uma pasta 'seeds' com o arquivo 'create_items.ts'

## [create_items.ts]
Criar informações que vão alimentar o banco de dados com informações padrão e nativas da aplicação.

## [Diretório server]
Criar um arquivo knexfile.ts e colocar as informações da conexão, migrations (tabela) e seeds (informações da tabela).

## [server.ts]
Incluir a rota para acessar as imagens.

## [Diretório src]
Criar uma pasta 'controllers' e dois aqruivos para controle de rotas 'ItemsController.ts' e 'PointsController.ts'

## [ItemsController.ts]
Importar o formato do Request e Response do express, importar a conexão com banco de dados e criar:  
- Método Controller Index: para listar os itens

## [PointsController.ts]
Importar o formato do Request e Response do express, importar a conexão com banco de dados e criar:
- Método Controller Index: para listar os pontos de coleta por filtro city/uf/items
- Método Controller Show: para exibir um ponto de coleta específico
- Método Controller Create: para criar os pontos de coleta

## [routes.ts]
Importa o express, importa as rotas do PointsController, importa as rotas do ItemsController  

## [Terminal]

    npm install cors
    npm install @types/cors -d

## [server.ts]
Faz a importação do cors



## 📕 Licença
Todos os arquivos incluídos aqui, incluindo este * README *, estão sob [Licença MIT](./LICENSE).
Criado por [Adriana Lima](https://github.com/dxwebster)
