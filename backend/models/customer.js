export default (sequelize, type) => {
  return sequelize.define("customer", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    username: {
      type: type.STRING,
      allowNull: false,
    },
    email: {
      type: type.STRING,
      allowNull: false,
    },
    password: {
      type: type.STRING,
      allowNull: false,
    },
    pincode: {
      type: type.INTEGER,
      allowNull: false,
    },
    address:{
        type: type.STRING,
        allowNull: false
    },
    phoneNumber:{
        type: type.BIGINT,
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
