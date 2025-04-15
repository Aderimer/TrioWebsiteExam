module.exports = (sequelize, Sequelize) => {
    const Cart = sequelize.define('Cart', {
        Status: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
        },
    },{
        timestamps: false
    });
    Cart.associate = function(models) {
        Cart.belongsTo(models.User, { foreignKey: 'UserId' });
        Cart.belongsToMany(models.Product, {
            through: models.CartItem,
            foreignKey: 'CartId',
            otherKey: 'ProductId'
        });
    };
    return Cart;
}