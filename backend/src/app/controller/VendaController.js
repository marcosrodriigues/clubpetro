var ClienteService = require('../service/ClienteService');
var FrentistaService = require('../service/FrentistaService');
var VendaService = require('../service/VendaService');
var util = require('../util/validate');
var validJson = require('../util/validateJsonInfo')
var moment = require('moment');

module.exports = {
    async index(request, response) {
        var vendas = await VendaService.findAll(); 
        return response.json( vendas );
    },

    async vendasPorFrentista(request, response) {
        const { cpf } = request.params;
        if (cpf){
            const frentista = await FrentistaService.findByCpf(cpf);
            var vendas = await VendaService.findByFrentista(frentista.id);
            return response.json(vendas);
        }
        return response.json([]);
    },

    async vendasPorCliente(request, response) {
        const { cpf } = request.params;
        if (cpf){
            const cliente = await ClienteService.findByCpf(cpf);
            var vendas = await VendaService.findByCliente(cliente.id);
            return response.json(vendas);
        }
        return response.json([]);
    },

    async store(req, res) {
        var venda = req.body;
        if (venda) {
            venda.data_venda = moment(venda.data_venda).format('YYYY-MM-DD HH:mm:SS')
            var { frentista, cliente } = venda;
            if (!util.validate(cliente).status) return res.json(util.validate(cliente));
            if (!util.validate(frentista).status) return res.json(util.validate(frentista));

            var cliente_db = await validJson.validateJsonInfo(cliente, ClienteService);
            var frentista_db = await validJson.validateJsonInfo(frentista, FrentistaService);
            venda.cliente = cliente_db.dataValues;
            venda.frentista = frentista_db.dataValues;

            if(await VendaService.isVendaValid(venda)) {
                venda = await VendaService.store(venda);
                return res.json (venda);
            }

            return res.json ({message: "Venda fraudulenta"});
        }

        return res.json({error: 'Venda não encontrada'});
    }
}