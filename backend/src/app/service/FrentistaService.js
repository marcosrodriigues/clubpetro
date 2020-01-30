var Frentista = require('../models').frentista;

module.exports = {
    async findByCpf(cpf) {
        var frentista = await Frentista.findOne({ 
            where: { cpf }
         });
        return frentista;
    },

    async findAll() {
        var frentista = await Frentista.findAll( {
            include: ['vendas']
        });
        return frentista;
    },

    async store(frentista) {
        var stored = await Frentista.create(frentista);
        return stored;
    }
}