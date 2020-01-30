module.exports = (sequelize,  DataTypes) => {
    const Venda = sequelize.define('venda', {
        preco: DataTypes.FLOAT,
        data_venda: DataTypes.DATE,
    }, {
        freezeTableName: true
    });

    Venda.associate = (model) => {
        Venda.belongsTo(model.frentista, { as: "frentista",  foreignKey: "frentista_id" });
        Venda.belongsTo(model.cliente, { as: "cliente",  foreignKey: "cliente_id" });
    }

    return Venda;
}