const userModel = (sequelize, DataTypes) =>
  sequelize.define("registers", {
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthDate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    numberOfKids: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    howDoYouHearAboutUs: {
      type: DataTypes.ENUM("Google", "TV", "Radio", "Social Network"),
      defaultValue: "Google",
    },
    gender: {
      type: DataTypes.ENUM("Male", "Female"),
      required: true,
      defaultValue: "Male",
    },
  });

module.exports = userModel;
