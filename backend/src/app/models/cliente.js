module.exports = (sequelize, DataTypes) => {
    const Cliente = sequelize.define('cliente', {
        cpf: DataTypes.BIGINT,
        nome: DataTypes.STRING
    }, {
        freezeTableName: true
    });

    Cliente.associate = (model) => {
        Cliente.hasMany(model.venda, { foreignKey: "cliente_id" })
    }

    return Cliente;
}