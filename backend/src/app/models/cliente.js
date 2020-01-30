module.exports = (sequelize, DataTypes) => {
    const Cliente = sequelize.define('cliente', {
        cpf: DataTypes.BIGINT,
        nome: DataTypes.STRING
    }, {
        freezeTableName: true
    });

    Cliente.associate = (model) => {
        Cliente.hasMany(model.venda, { as: "vendas", foreignKey: "cliente_id", constraints: false })
        //Cliente.hasMany(model.venda, { as: "vendas", constraints: false })
    }

    return Cliente;
}