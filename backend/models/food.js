export default (sequelize, type) => {
    return sequelize.define("food", {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name:{
        type: type.STRING,
        allowNull: false,
      },
      price:{
        type: type.INTEGER,
        allowNull: false,
      },
      foodType:{
        type: type.STRING,
        allowNull: false
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
  