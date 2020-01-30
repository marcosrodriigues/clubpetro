var Venda = require('../models').venda;
var Frentista = require('../models').frentista
var Cliente = require('../models').cliente

const db = require('../models/index');
const Op = db.Sequelize.Op;

const today = new Date();
const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
const lastDayofMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);

module.exports = {
    async findAll() {
        var vendas = await Venda.findAll({ 
            include: [{
                model: Frentista,
                as: 'frentista'
            }, {
                model: Cliente,
                as: 'cliente'
            }],
            where: {
                data_venda: {
                    [Op.between]: [firstDayOfMonth, lastDayofMonth]
                }
            }
         });
        return vendas;
    },

    async findByFrentista(id) {
        const where = {
            frentista_id: id,
            data_venda: {
                [Op.between]: [firstDayOfMonth, lastDayofMonth] 
            }
        }
        var vendas = await Venda.findAll({where: where});
        return vendas;
    },

    async findByFrentistaStatus(id, fiel) {
        const where = {
            frentista_id: id,
            data_venda: {
                [Op.between]: [firstDayOfMonth, lastDayofMonth] 
            },
            fiel: fiel
        }
        var vendas = await Venda.findAll({where: where});
        return vendas;
    },

    async findByCliente(id) {
        const where = {
            cliente_id: id,
            data_venda: {
                [Op.between]: [firstDayOfMonth, lastDayofMonth] 
            }
        }
        var vendas = await Venda.findAll({where: where});
        return vendas;
    },

    async findByClienteStatus(id, fiel) {
        const where = {
            cliente_id: id,
            data_venda: {
                [Op.between]: [firstDayOfMonth, lastDayofMonth] 
            },
            fiel: fiel
        }
        var vendas = await Venda.findAll({where: where});
        return vendas;
    },

    async store(venda) {
        var stored = await Venda.create({
            preco: venda.preco,
            data_venda: venda.data_venda,
            fiel: venda.fiel,
            frentista_id: venda.frentista.id,
            cliente_id: venda.cliente.id
        });
        return stored;
    },

    async isVendaValid(venda) {
        const { frentista, cliente } = venda;

        const allVendas = await this.findAll();

        const vendasDoCliente = allVendas.filter(v => {
            return v.cliente_id == cliente.id
        });
        const vendasDoFrentista = allVendas.filter(v => {
            return v.frentista_id == frentista.id
        });
        const porClienteEFrentista = allVendas.filter(v => {
            return (v.cliente_id == cliente.id && v.frentista_id == frentista.id)
        });

        if (vendasDoCliente.length > 7) {
            return false;
        }
        if (vendasDoFrentista.length > 20) {
            return false;
        }
        if ((vendasDoFrentista.length / allVendas.length) > 0.2) {
            return false;
        }
        if (porClienteEFrentista.length > 3) {
            return false;
        }

        return true;
    }
}