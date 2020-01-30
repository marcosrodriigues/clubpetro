var ClienteService = require('../service/ClienteService')

module.exports = {
    async index(request, response) {
        var clientes = await ClienteService.findAll(); 
        return response.json( clientes );
    },
}