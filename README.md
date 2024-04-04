# VagasEmprego

O projeto foi criado utilizando a versão 15 do Angular e Ionic em sua última versão (v7) seguindo todos o layout estabelecidos no frontend (Web e Mobile). A API foi criada e estruturada seguindo o modelo do .NET Core Code First, mas durante o desenvolvimento ocorreu um erro na geração da Migration, impossibilitando a utilização do modelo Code First para espelhar todo o contexto da API para o banco de dados em SQL Server, visando toda a aplicação em geral e o prazo de entrega, eu decidi por importar o arquivo JSON no frontend e utilizar o NgRx para o gerenciamento de estados da aplicação, armazenando a lista de empregos e filtrando-os no Angular.

Rode o comando `npm install` e depois `npm start` para inicializar a aplicação.

Caso o projeto apresente algum erro no momento da instalação, exclua o arquivo package-lock.json e faça o passo a passo acima novamente.
