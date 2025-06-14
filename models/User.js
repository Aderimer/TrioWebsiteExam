module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('User', {
        Name: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
        },
        Email: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
        },
        EncryptedPassword: {
            type: Sequelize.DataTypes.BLOB,
            allowNull: false
        },
        Salt: {
            type: Sequelize.DataTypes.BLOB,
            allowNull: false
        }
    });
    User.associate = function(models) {
        User.hasOne(models.Cart, { foreignKey: 'UserId' });
    };
    return User;
}