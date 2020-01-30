var Cliente = require('../../src/app/service/ClienteService');

module.exports = {
    seed() {
        return Promise.all([
            Cliente.store({ cpf: 23780026023, nome: 'Cliente 1' }),
            Cliente.store({ cpf: 38588469022, nome: 'Cliente 2' }),
            Cliente.store({ cpf: 78005382065, nome: 'Cliente 3' }),
            Cliente.store({ cpf: 40880125004, nome: 'Cliente 4' }),
            Cliente.store({ cpf: 59671839061, nome: 'Cliente 5' }),
            Cliente.store({ cpf: 77284439092, nome: 'Cliente 6' }),
            Cliente.store({ cpf: 74005893007, nome: 'Cliente 7' }),
        ])
        .catch(err => {
            console.log(err);
        })
    }
}