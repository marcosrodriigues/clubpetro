var Cliente = require('../..//src/app/service/ClienteService')
var Frentista = require('../..//src/app/service/FrentistaService')
var Venda = require('../..//src/app/service/VendaService');
var moment = require('moment');

module.exports = {
    async seed() {
        var cliente_1 = (await Cliente.store({ cpf: 23780026023, nome: 'Cliente 1' })).dataValues
        var cliente_2 = (await Cliente.store({ cpf: 38588469022, nome: 'Cliente 2' })).dataValues
        var cliente_3 = (await Cliente.store({ cpf: 78005382065, nome: 'Cliente 3' })).dataValues
        var cliente_4 = (await Cliente.store({ cpf: 35150575011, nome: 'Cliente 4' })).dataValues
        var cliente_5 = (await Cliente.store({ cpf: 93685192000, nome: 'Cliente 5' })).dataValues
        var cliente_6 = (await Cliente.store({ cpf: 43799028030, nome: 'Cliente 6' })).dataValues
        var cliente_7 = (await Cliente.store({ cpf: 70064670040, nome: 'Cliente 7' })).dataValues
        var cliente_8 = (await Cliente.store({ cpf: 22163824004, nome: 'Cliente 8' })).dataValues
        var cliente_9 = (await Cliente.store({ cpf: 25762233030, nome: 'Cliente 9' })).dataValues
        var cliente_10 = (await Cliente.store({ cpf: 29809420064, nome: 'Cliente 10' })).dataValues

        var frentista_1 = (await Frentista.store({ cpf: 63349960022, nome: 'Frentista 1' })).dataValues
        var frentista_2 = (await Frentista.store({ cpf: 44531931068, nome: 'Frentista 2' })).dataValues
        var frentista_3 = (await Frentista.store({ cpf: 21378022017, nome: 'Frentista 3' })).dataValues
        var frentista_4 = (await Frentista.store({ cpf: 76892257054, nome: 'Frentista 4' })).dataValues
        var frentista_5 = (await Frentista.store({ cpf: 09061521009, nome: 'Frentista 5' })).dataValues
        
        // Cliente 1 abastecendo 5x sendo 3x com Frentista 1
        await Venda.store({ frentista: frentista_1, cliente: cliente_1, preco: 100, data_venda: '2020-01-05'})
        await Venda.store({ frentista: frentista_1, cliente: cliente_1, preco: 150, data_venda: '2020-01-12'})
        await Venda.store({ frentista: frentista_1, cliente: cliente_1, preco: 120, data_venda: '2020-01-20'})
        await Venda.store({ frentista: frentista_1, cliente: cliente_1, preco: 200, data_venda: '2020-01-28', fiel: false})
        await Venda.store({ frentista: frentista_2, cliente: cliente_1, preco: 110, data_venda: '2020-01-15'})
        await Venda.store({ frentista: frentista_4, cliente: cliente_1, preco: 105, data_venda: '2020-01-22'})
        
        // Cliente 2 abasetecendo 7x, 3x com o Frentista 1 e 2, e 1x com o Frentista 3
        await Venda.store({ frentista: frentista_1, cliente: cliente_2, preco: 80, data_venda: '2020-01-04'})
        await Venda.store({ frentista: frentista_1, cliente: cliente_2, preco: 45, data_venda: '2020-01-09'})
        await Venda.store({ frentista: frentista_1, cliente: cliente_2, preco: 125, data_venda: '2020-01-14'})
        await Venda.store({ frentista: frentista_2, cliente: cliente_2, preco: 120, data_venda: '2020-01-05'})
        await Venda.store({ frentista: frentista_2, cliente: cliente_2, preco: 30, data_venda: '2020-01-08'})
        await Venda.store({ frentista: frentista_2, cliente: cliente_2, preco: 50, data_venda: '2020-01-07'})
        await Venda.store({ frentista: frentista_3, cliente: cliente_2, preco: 100, data_venda: '2020-01-20'})

        //Cliente 3 abastecendo 7x
        await Venda.store({ frentista: frentista_1, cliente: cliente_3, preco: 80, data_venda: '2020-01-12'})
        await Venda.store({ frentista: frentista_1, cliente: cliente_3, preco: 100, data_venda: '2020-01-10'})
        await Venda.store({ frentista: frentista_2, cliente: cliente_3, preco: 120, data_venda: '2020-01-08'})
        await Venda.store({ frentista: frentista_2, cliente: cliente_3, preco: 40, data_venda: '2020-01-15'})
        await Venda.store({ frentista: frentista_3, cliente: cliente_3, preco: 50, data_venda: '2020-01-20'})
        await Venda.store({ frentista: frentista_4, cliente: cliente_3, preco: 20, data_venda: '2020-01-22'})
        await Venda.store({ frentista: frentista_5, cliente: cliente_3, preco: 30, data_venda: '2020-01-25'})

        // Cliente 4 abastecendo 7x
        await Venda.store({ frentista: frentista_1, cliente: cliente_4, preco: 30, data_venda: '2020-01-01'})
        await Venda.store({ frentista: frentista_1, cliente: cliente_4, preco: 50, data_venda: '2020-01-02'})
        await Venda.store({ frentista: frentista_1, cliente: cliente_4, preco: 80, data_venda: '2020-01-05'})
        await Venda.store({ frentista: frentista_2, cliente: cliente_4, preco: 100, data_venda: '2020-01-10'})
        await Venda.store({ frentista: frentista_2, cliente: cliente_4, preco: 120, data_venda: '2020-01-15'})
        await Venda.store({ frentista: frentista_2, cliente: cliente_4, preco: 150, data_venda: '2020-01-20'})
        await Venda.store({ frentista: frentista_3, cliente: cliente_4, preco: 200, data_venda: '2020-01-25'})

        // Cliente 5 abastecendo 7x
        await Venda.store({ frentista: frentista_1, cliente: cliente_5, preco: 30, data_venda: '2020-01-10'})
        await Venda.store({ frentista: frentista_1, cliente: cliente_5, preco: 30, data_venda: '2020-01-11'})
        await Venda.store({ frentista: frentista_1, cliente: cliente_5, preco: 30, data_venda: '2020-01-12'})
        await Venda.store({ frentista: frentista_2, cliente: cliente_5, preco: 30, data_venda: '2020-01-13'})
        await Venda.store({ frentista: frentista_2, cliente: cliente_5, preco: 30, data_venda: '2020-01-14'})
        await Venda.store({ frentista: frentista_2, cliente: cliente_5, preco: 30, data_venda: '2020-01-15'})
        await Venda.store({ frentista: frentista_3, cliente: cliente_5, preco: 30, data_venda: '2020-01-16'})

        // Cliente 6 abastecendo 7x
        await Venda.store({ frentista: frentista_1, cliente: cliente_6, preco: 40, data_venda: '2020-01-02'})
        await Venda.store({ frentista: frentista_1, cliente: cliente_6, preco: 40, data_venda: '2020-01-04'})
        await Venda.store({ frentista: frentista_1, cliente: cliente_6, preco: 40, data_venda: '2020-01-06'})
        await Venda.store({ frentista: frentista_2, cliente: cliente_6, preco: 40, data_venda: '2020-01-08'})
        await Venda.store({ frentista: frentista_2, cliente: cliente_6, preco: 40, data_venda: '2020-01-10'})
        await Venda.store({ frentista: frentista_2, cliente: cliente_6, preco: 40, data_venda: '2020-01-12'})
        await Venda.store({ frentista: frentista_3, cliente: cliente_6, preco: 40, data_venda: '2020-01-14'})

        // Cliente 7 abastecendo 7x
        await Venda.store({ frentista: frentista_1, cliente: cliente_7, preco: 50, data_venda: '2020-01-14'})
        await Venda.store({ frentista: frentista_1, cliente: cliente_7, preco: 50, data_venda: '2020-01-16'})
        await Venda.store({ frentista: frentista_1, cliente: cliente_7, preco: 50, data_venda: '2020-01-18'})
        await Venda.store({ frentista: frentista_2, cliente: cliente_7, preco: 50, data_venda: '2020-01-20'})
        await Venda.store({ frentista: frentista_2, cliente: cliente_7, preco: 50, data_venda: '2020-01-22'})
        await Venda.store({ frentista: frentista_2, cliente: cliente_7, preco: 50, data_venda: '2020-01-24'})
        await Venda.store({ frentista: frentista_3, cliente: cliente_7, preco: 50, data_venda: '2020-01-26'})

        // Cliente 8 abastecendo 7x
        await Venda.store({ frentista: frentista_2, cliente: cliente_8, preco: 50, data_venda: '2020-01-16'})
        await Venda.store({ frentista: frentista_3, cliente: cliente_8, preco: 50, data_venda: '2020-01-18'})
        await Venda.store({ frentista: frentista_3, cliente: cliente_8, preco: 50, data_venda: '2020-01-20'})
        await Venda.store({ frentista: frentista_3, cliente: cliente_8, preco: 50, data_venda: '2020-01-22'})
        await Venda.store({ frentista: frentista_4, cliente: cliente_8, preco: 50, data_venda: '2020-01-24'})
        await Venda.store({ frentista: frentista_4, cliente: cliente_8, preco: 50, data_venda: '2020-01-26'})

        // Cliente 9 abastecendo 7x
        await Venda.store({ frentista: frentista_3, cliente: cliente_9, preco: 50, data_venda: '2020-01-14'})
        await Venda.store({ frentista: frentista_3, cliente: cliente_9, preco: 50, data_venda: '2020-01-16'})
        await Venda.store({ frentista: frentista_3, cliente: cliente_9, preco: 50, data_venda: '2020-01-18'})
        await Venda.store({ frentista: frentista_4, cliente: cliente_9, preco: 50, data_venda: '2020-01-20'})
        await Venda.store({ frentista: frentista_4, cliente: cliente_9, preco: 50, data_venda: '2020-01-24'})
        await Venda.store({ frentista: frentista_5, cliente: cliente_9, preco: 50, data_venda: '2020-01-26'})

        // Cliente 10 abastecendo 7x
        await Venda.store({ frentista: frentista_5, cliente: cliente_10, preco: 50, data_venda: '2020-01-14'})
        await Venda.store({ frentista: frentista_5, cliente: cliente_10, preco: 50, data_venda: '2020-01-16'})
        await Venda.store({ frentista: frentista_5, cliente: cliente_10, preco: 50, data_venda: '2020-01-18'})
        await Venda.store({ frentista: frentista_4, cliente: cliente_10, preco: 50, data_venda: '2020-01-20'})
        await Venda.store({ frentista: frentista_4, cliente: cliente_10, preco: 50, data_venda: '2020-01-22'})
        await Venda.store({ frentista: frentista_4, cliente: cliente_10, preco: 50, data_venda: '2020-01-24'})
        await Venda.store({ frentista: frentista_3, cliente: cliente_10, preco: 50, data_venda: '2020-01-26'})

        return;
    }
}