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
routes.get('/venda/cliente/:cpf', VendaController.vendasPorCliente)
routes.post('/venda', VendaController.store)
routes.get('/cliente', ClienteController.index)
routes.get('/frentista', FrentistaController.index)

module.exports = routes;