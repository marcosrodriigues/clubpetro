var Frentista = require('../../src/app/service/FrentistaService');

module.exports = {
    seed() {
        return Promise.all([
            Frentista.store({ cpf: 63349960022, nome: 'Frentista 1' }),
            Frentista.store({ cpf: 44531931068, nome: 'Frentista 2' }),
            Frentista.store({ cpf: 21378022017, nome: 'Frentista 3' }),
            Frentista.store({ cpf: 65372241012, nome: 'Frentista 4' }),
            Frentista.store({ cpf: 40314237054, nome: 'Frentista 5' }),
            Frentista.store({ cpf: 76873451002, nome: 'Frentista 6' }),
            Frentista.store({ cpf: 28836098029, nome: 'Frentista 7' }),
        ])
        .catch(err => {
            console.log(err);
        })
    }
}