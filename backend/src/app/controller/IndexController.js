const seed = require('../../../database/seeders/Seed');

const paths = require('./util/paths.json')

module.exports = {
    async index(request, response) {
        return response.json(paths);
    },

    async seed(request, response) {
        await seed.seed();
        return response.json({ message: "Banco de dados alimentado!" })
    }
}