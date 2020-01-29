const Cliente = require('./cliente');
const Frentista = require('./frentista'); 

module.exports = (sequelize, DataTypes) => {
    const Venda = sequelize.define('Venda', {
        id: DataTypes.INTEGER,
        preco: DataTypes.FLOAT,
        data: DataTypes.DATEONLY,
    });

    Venda.associate = model => {
        Venda.hasOne(Cliente);
        Venda.hasOne(Frentista);
    }

    return Frentista;
}