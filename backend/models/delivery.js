export default (sequelize, type) => {
  return sequelize.define("delivery", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    deptTime: {
      type: type.DATE,
      defaultValue: new Date(),
    },
    arrivalTime: {
      type: type.DATE,
      defaultValue: new Date(),
    },
    status: {
      type: type.STRING,
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
