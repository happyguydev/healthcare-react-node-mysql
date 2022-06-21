module.exports = (sequelize, Sequelize) => {
  const UserRole = sequelize.define(
    "user_role",
    {
      rid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      role: {
        type: Sequelize.ENUM,
        values: ["admin", "user"],
        defaultValue: "user",
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  const Users = sequelize.define(
    "users",
    {
      uid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.STRING,
      },
      role_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: UserRole,
          key: "rid",
        },
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  const HistoryLog = sequelize.define(
    "history_log",
    {
      hid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      first: {
        type: Sequelize.INTEGER,
      },
      second: {
        type: Sequelize.INTEGER,
      },
      third: {
        type: Sequelize.INTEGER,
      },
      fourth: {
        type: Sequelize.INTEGER,
      },
      fifth: {
        type: Sequelize.INTEGER,
      },
      uid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: Users,
          key: "uid",
        },
      },
      createdAt: {
        type: "TIMESTAMP",
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      updatedAt: {
        type: "TIMESTAMP",
        defaultValue: sequelize.literal(
          "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
        ),
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  return { UserRole, Users, HistoryLog };
};
