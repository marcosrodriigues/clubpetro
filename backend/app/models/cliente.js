module.exports = (sequelize, DataTypes) => {
    const Cliente = sequelize.define('Cliente', {
        id: DataTypes.INTEGER,
        cpf: DataTypes.BIGINT,
        nome: DataTypes.STRING
    });

    return Cliente;
}