module.exports = (sequelize, Sequelize) => {
    const CartItem = sequelize.define('CartItem', {
        Quantity: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false
        },
    },{
        timestamps: false
    })
    CartItem.associate = function(models) {
        CartItem.belongsTo(models.Cart, { foreignKey: 'CartId' });
        CartItem.belongsTo(models.Product, { foreignKey: 'ProductId' });
        CartItem.belongsTo(models.User, { foreignKey: 'UserId' });

    };
    return CartItem;
}