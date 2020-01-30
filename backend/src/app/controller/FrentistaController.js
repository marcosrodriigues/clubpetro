var FrentistaService = require('../service/FrentistaService');

module.exports = {
    async index(request, response) {
        var frentistas = await FrentistaService.findAll(); 
        return response.json( frentistas );
    },
}