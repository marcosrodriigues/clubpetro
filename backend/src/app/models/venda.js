var Cliente = require('./').cliente;
var Frentista = require('./').frentista;

module.exports = (sequelize,  DataTypes) => {
    const Venda = sequelize.define('venda', {
        preco: DataTypes.FLOAT,
        data_venda: DataTypes.DATEONLY,
        cliente_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Cliente,
                key: 'id'
            }
        },
        frentista_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Frentista,
                key: 'id'
            }
        },
    }, {
        freezeTableName: true
    });

    // Venda.associate = (model) => {
    //     Venda.belongsToMany(model.frentista, {

    //     })

    //     Venda.belongsToMany(model.cliente, {
    //     })
    // }

    return Venda;
}