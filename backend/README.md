# ClubPetro Backend

## Iniciando a aplicação

Para iniciar a aplicação, abra o terminal e caminhe até o diretório da pasta _backend_. Digite _npm install.
```
npm install
```
Aguarde o _npm_ baixar e instalar os pacotes.

Certifique-se de ter o servidor MySQL rodando em sua máquina. As configurações do MySQL podem ser encontradas [aqui](https://github.com/marcosrodriigues/clubpetro/blob/master/backend/src/config/database.js).

Uma vez com os pacotes instalados e o MySQL configurado, execute _yarn dev_ para iniciar o projeto.
```
yarn dev
```
Após o projeto iniciar, acesse o endereço _[http://localhost:3030](http://localhost:3000/)_ em seu navegador para começar a navegar na API


## Endpoints

A seguir estão listadas os endpoints da API do ClubPetro.

### Método GET
- /
	- Index da API, acessada a partir do _root_ do servidor. Disponibiliza um JSON com todos os endpoints disponíveis.
- /seed
	- Alimenta o banco de dados com 10 clientes, 5 frentistas e 134 vendas, sendo 67 vendas em Janeiro e 67 vendas em Fevereiro.  Das 67 vendas, 66 são Fieis e 1 Fraude, que percente ao Cliente de CPF 23780026023 e ao Frentista de CPF 63349960022.
- /venda
	- Retorna todas as vendas cadastradas cadastrar com data do mês corrente
- /venda/frentista/:cpf
	- Retorna todas as vendas realizadas no mes pelo frentista de CPF informado no parametro 
- /venda/frentista/fiel/:cpf
	- Retorna todas as vendas fieis realizadas no mes pelo frentista de CPF informado no parametro
- /venda/frentista/fraude/:cpf
	- Retorna todas as vendas fraudulentas realizadas no mes pelo frentista de CPF informado no parametro
- /venda/cliente/:cpf
	- Retorna todas as vendas feitas no mes atual pelo cliente de CPF informado no parametro
- /venda/cliente/fiel/:cpf
	-  Retorna todas as vendas fieis feitas no mes atual pelo cliente de CPF informado no parametro
- /venda/cliente/fraude/:cpf
	- Retorna todas as vendas fraudulentas feitas no mes atual pelo cliente de CPF informado no parametro
- /cliente
	- Retorna todos os clientes bem como todas as suas vendas
- /frentista
	- Retorna todos os frentistas bem como todas as suas vendas

### Método POST
- /venda
	- Cadastra uma venda

## Cadastro de venda
Uma vez com o servidor rodando, para se cadastrar uma nova venda, basta enviar uma requisição com o método _POST_ para o endpoint _/venda_. O endpoint _/venda_ recebe como parâmetro a seguinte estrutura JSON:

```
{
	"preco" : FLOAT,
	"data_venda" : STRING ("YYYY-MM-DD"),
	"frentista" : {
		"cpf": BIGINT,
    	"nome": STRING (opcional)
	},
	"cliente" : {
		"cpf": BIGINT,
	    "nome": STRING (opcional)
	}
}
```
No cadastro da Venda, o Frentista ou o Cliente podem ou não estar pré-cadastrados no sistema. Isto é, caso não exista Frentista ou Cliente com o CPF cadastrado, a API automaticamente cadastra o Frentista ou o Cliente e associa a venda a eles.


