const seed = require('../../../database/seeders/Seed');

module.exports = {
    async index(request, response) {
        return response.json( { message: 'index'} );
    },

    async seed(request, response) {
        await seed.seed();
        return response.json({ message: "seeded" })
    }
}