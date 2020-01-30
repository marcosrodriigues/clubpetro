const { Router } = require('express');

const VendaController = require ('./app/controller/VendaController')
const ClienteController = require('./app/controller/ClienteController');
const FrentistaController = require('./app/controller/FrentistaController')
const IndexController = require('./app/controller/IndexController');

const routes = Router();

routes.get('/', IndexController.index)
routes.get('/seed', IndexController.seed)
routes.get('/venda', VendaController.index)
routes.get('/venda/frentista/:cpf', VendaController.vendasPorFrentista)
routes.get('/venda/frentista/fiel/:cpf', VendaController.vendasPorFrentistaFiel)
routes.get('/venda/frentista/fraude/:cpf', VendaController.vendasPorFrentistaFraude)
routes.get('/venda/cliente/:cpf', VendaController.vendasPorCliente)
routes.get('/venda/cliente/fiel/:cpf', VendaController.vendasPorClienteFiel)
routes.get('/venda/cliente/fraude/:cpf', VendaController.vendasPorClienteFraude)
routes.post('/venda', VendaController.store)
routes.get('/cliente', ClienteController.index)
routes.get('/frentista', FrentistaController.index)

module.exports = routes;