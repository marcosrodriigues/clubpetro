module.exports = (sequelize, DataTypes) => {
    const Frentista = sequelize.define('frentista', {
        cpf: DataTypes.BIGINT,
        nome: DataTypes.STRING
    }, {
        freezeTableName: true
    });

    Frentista.associate = (model) => {
        Frentista.hasMany(model.venda, { foreignKey: "frentista_id" })
    }

    return Frentista;
}