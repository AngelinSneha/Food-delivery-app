export default (sequelize, type) => {
    return sequelize.define("cartItem", {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      quantity:{
        type: type.INTEGER,
        default: 1,
      },
      createdAt: {
        type: type.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        type: type.DATE,
        defaultValue: new Date(),
      },
    });
  };
  