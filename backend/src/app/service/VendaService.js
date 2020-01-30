var Venda = require('../models').venda;
var Frentista = require('../models').frentista
var Cliente = require('../models').cliente

module.exports = {
    async findAll() {
        var vendas = await Venda.findAll({ 
            include: [{
                model: Frentista,
                as: 'frentista'
            }, {
                model: Cliente,
                as: 'cliente'
            }]
         });
        return vendas;
    },

    async store(venda) {
        var stored = await Venda.create({
            preco: venda.preco,
            data_venda: venda.data_venda,
            frentista_id: venda.frentista.id,
            cliente_id: venda.cliente.id
        });
        return stored;
    }
}