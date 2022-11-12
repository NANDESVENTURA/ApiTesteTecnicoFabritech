# ApiTesteTecnicoFabritech-Backend


## Sobre
Esta api faz o gerenciamento de Clientes, permitindo o cadastro, visualização, atualização das informações e remoção. 
<br>

## Requisitos
- [x] CRUD de clientes.

- [x] Autenticação de usuário.

- [x] Criptografia de senha.

- [x] Conexão Postgres.



## Começando
- Primeiramente, instale as dependências utilizando ```yarn install``` , depende do gerenciador de pacotes de sua preferência
- Antes de começar dever ter:
    - Uma conexão Postgress, nessa aplicação foi utilizado o Sequelize.   
- Criar um arquivo ```.env``` para armezenzar dados sensiveis a aplicação, como o secret para o token e a conexão postgress
```.env
SECRET=<Chave md5>
DATABASE_HOST=<Host do Banco de Dados>
DATABASE_USER=<User do Banco de Dados>
DATABASE_PASSWORD=<Senha do Banco de Dados>
DATABASE=<Schema do Banco de Dados>
PORT=<Porta usada pela aplicação>
```
Com essas variáveis de ambiente configuradas podemos executar nossa aplicação. 

## Executando
Para a execução foram criados alguns scripts dentro da aplicação
- dev-server : Execute  o comando ```yarn dev``` para executar a aplicação com o nodemon para desenvolvimento, ele vai recarregar a aplicação sempre que uma nova mudança for salva.
- vue-cli-service: Execute o comando "yarn run serve" no FrontEnd pra iniciar o front, e acesse a rota indicada no terminal. 
- Para criar as migrations no banco execute o comando ```yarn sequelize db:migrate```.

As rotas dispostas pela API são:
- ```/user  POST``` : Para cadastro do usuário
- ```/auth POST``` : Para autenticação do usuário

<br> *Todas abaixo precisam de autenticação*


- ```/client POST```: Para cadastro de cliente
- ```/client GET``` : Para listagem dos clientes cadastrados
- ```/client/:id PUT``` : Atualiza informações do cliente
- ```/client/:id DELETE``` : Deleta informações do cliente




## Autor
*Ernandes Ventura Silva Neto*

[![Linkedin Badge](https://img.shields.io/badge/-Ernandes%20Ventura-6633cc?style=flat-square&logo=Linkedin&logoColor=black&link=https://www.linkedin.com/in/ernandes-ventura-892a88119/)](https://www.linkedin.com/in/ernandes-ventura-892a88119/)
