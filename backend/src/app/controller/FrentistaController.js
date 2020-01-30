var Frentista = require('../models/').frentista

module.exports = {
    async index(request, response) {
        var frentistas = await Frentista.findAll(); 
        return response.json( frentistas );
    },
}