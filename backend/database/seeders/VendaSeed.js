var Venda = require('../../src/app/service/VendaService');

module.exports = {
    seed() {
        return Promise.all([
            Venda.store({ cpf: 23780026023, nome: 'Venda 1' }),
            Venda.store({ cpf: 38588469022, nome: 'Venda 2' }),
            Venda.store({ cpf: 78005382065, nome: 'Venda 3' }),
            Venda.store({ cpf: 40880125004, nome: 'Venda 4' }),
            Venda.store({ cpf: 59671839061, nome: 'Venda 5' }),
            Venda.store({ cpf: 77284439092, nome: 'Venda 6' }),
            Venda.store({ cpf: 74005893007, nome: 'Venda 7' }),
        ])
        .catch(err => {
            console.log(err);
        })
    }
}