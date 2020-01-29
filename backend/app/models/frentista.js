module.exports = (sequelize, DataTypes) => {
    const Frentista = sequelize.define('Frentista', {
        id: DataTypes.INTEGER,
        cpf: DataTypes.BIGINT,
        nome: DataTypes.STRING
    });

    return Frentista;
}