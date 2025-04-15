module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define('Product', {
        Name: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
        },
        Price: {
            type: Sequelize.DataTypes.FLOAT,
            allowNull: false
        },
        Description: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
        },
        ImageUrl: {
            type: Sequelize.DataTypes.STRING,
            allowNull: true
        },
        Stock: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false
        },
    },{
        timestamps: false
    });
    Product.associate = function(models) {
        Product.belongsToMany(models.Cart, {
            through: models.CartItem,
            foreignKey: 'ProductId',
            otherKey: 'CartId'
        });
    };
    return Product;
}