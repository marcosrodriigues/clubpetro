var Venda = require('../models').venda;

module.exports = {
    async findAll() {
        var vendas = await Venda.findAll({ 
            include: [Venda.Frentista, Venda.Cliente]
         });
        return vendas;
    },

    async store(venda) {
        var stored = await Venda.create({
            preco: venda.preco,
            data_venda: venda.data_venda,
            cliente_id: venda.cliente.id,
            frentista_id: venda.frentista.id
        });
        return stored;
    }
}