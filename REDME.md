** - Protocolo HTTP
- É o principal protocolo usado para trasndefencia de dados na internet
- Éa orincipal base de comunicação entre servidores web (APIs) e cliente (navegadores)
* - Arquitetura Básica
- Tem o modelo cliente-servidor, onde o cliente envia uma requisição e recebe uma resposta de servidor
- Lista de códigos HTTP:
-- https://www.httpstatus.com.br/?_gl=1*1b1hh9u*_ga*MTY5NDkxODUwLjE3MTMzNzg2Mjg.*_ga_37GXT4VGQK*MTcyMjI4MzcwMy43LjEuMTcyMjI4NDcyMS4wLjAuMA..

- Lista de cabeçalhos HTTP:
-- https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers?_gl=1*1b1hh9u*_ga*MTY5NDkxODUwLjE3MTMzNzg2Mjg.*_ga_37GXT4VGQK*MTcyMjI4MzcwMy43LjEuMTcyMjI4NDcyMS4wLjAuMA..

* - Métodos HTTP
- GET - solicita dados sem filtros
- POST - envia dados para serem processados no servidor
- PUT - substitui um dado já existente no servidor
- PATCH - parece o PUT, mas atualiza o dados apenas parcialmente
- DELETE - remove um dado no servidor
- Existem outros metodos como o HEAD e OPTIONS, mas eles são menos comuns
* - Códigos de Status HTTP
- Cada resopost HTTP possui um código, que especifica a atureza do seu resultado
- 2xx - sucesso
-- 200 OK: a solicitação foi bem sucedida
-- 201 CREATED: a criação solicitada foi realizada com sucesso
- 4xx - erro no clinete
-- 400 BAD REQUEST: a solicitação enviada pelo cliente contém algum erro
-- 403 FORBIDDEN: o cliente não tem permissão para executar a ação solicitada
-- 404 NOT FOUND: o servidor não encontrou o recurso solicitado
- 5xx - Erro no servidor
-- 500 INTERNAL SEERVER ERROR: ocorreu algum erro inesperado no servidor
************ ISSO TUDO SÃO BOAS PRÁTICAS....... *************

* - Cabeçalhos HTTP (Headers)
- O cabeçalho (header) contém informações sobre a requisição/resposta HTTP
- Content-Type
-- indica o tipo de conteúdo que está sendo enviado na requisição/resposta
--- exemplo: application/json > tipo de conteúdo da requisição
- Content-Length
-- indica o tamanho do corpo da requisição/resposta
- Authorization
-- armazena as credencias (criptografadas) do usuário autenticado
--- exemplo: JWT Token

================================================== comando utilizados
> docker ps
> docker pull postgres
> docker stop postgres-container
> docker rm postgres-container
> docker run -d \
  --name postgres-container \
  -e POSTGRES_PASSWORD=password \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_DB=financeapp \
  -v ~/Documents/frameworksJS/FinTrack/postgres/finance-app:/var/lib/postgresql/data \
  -p 5433:5432 \
  postgres

> netstat -an | findstr 5432
> npm install eslint@8.46.0
> npm install husky@8.0.3
> npm install lint-staged@13.2.3

> npm init -y

------------------------------------------ ESLint
- Assim como temos regras para escrever português, podemos ter regras para escrever nosso código
Como ESLint, nós:
-- garantimos que nosso código siga certas regras para ser mais limpo e livre de bugs
-- garantimos que um certo padrão seja seguido por rodos os desenvolvedores do projeto
Exemplos de regras:
-- Uso ou não usu de ponto e vírgula (estilização)
-- Uso de aspas simples ou duplas
-- Previnir variáveis definidas mas não utilizadas (quanlidade de código)
-- Proibir declarações de variáveis com var (qualidade de código)
-- Preferir a criação de Arrow Functions do que funções convencionais


------------------------------------------ Prettier
---------------- styles
-- Com o Pretier, podemos garanter que nosso código siga determinado estilo
-- Diferente do ESLint, ele não garante qualidade de código, mas estilização


> npm install -D eslint
> npx eslint --init
>>$ npx eslint --init
    You can also run this command directly using 'npm init @eslint/config'.
    √ How would you like to use ESLint? · problems
    √ What type of modules does your project use? · esm
    √ Which framework does your project use? · none
    √ Does your project use TypeScript? · No / Yes
    √ Where does your code run? · node
    √ What format do you want your config file to be in? · JSON
    Local ESLint installation not found.
    The config that you've selected requires the following dependencies:

    eslint@latest
    ? Would you like to install them now? » No / Yes

> npx prettier index.js
> npm install -D husky@8.0.3 lint-staged@13.2.3
> npx husky install

> npm install -D git-commit-msg-linter
> npx husky add .husky/commit-msg ".git/hooks/commit-msg \$1"

> npm install pg
> npm install dotenv

> npm i bcrypt
> npm i uuid

> npm run migrations
> npm run start:dev