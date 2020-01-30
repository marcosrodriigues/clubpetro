var Cliente = require('../models/').cliente

module.exports = {
    async index(request, response) {
        var clientes = await Cliente.findAll(); 
        return response.json( clientes );
    },
}