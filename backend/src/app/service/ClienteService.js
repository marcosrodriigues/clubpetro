var Cliente = require('../models').cliente;

module.exports = {
    async findByCpf(cpf) {
        var cliente = await Cliente.findOne({ 
            where: { cpf }
         });
        return cliente;
    },

    async store(cliente) {
        var stored = await Cliente.create(cliente);
        return stored;
    }
}