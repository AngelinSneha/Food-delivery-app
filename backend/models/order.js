export default (sequelize, type) => {
  return sequelize.define("order", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    
    Date: {
      type: type.DATE,
      defaultValue: new Date(),
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
