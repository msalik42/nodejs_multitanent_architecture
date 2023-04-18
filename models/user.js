module.exports = (sequelize, DataTypes, RTO_ID) => {
  return sequelize.define(`${process.env.USER_TABLE}_${RTO_ID}`, {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  },{
    timestamps: false
  });
};
