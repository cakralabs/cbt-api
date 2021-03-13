module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.BOOLEAN
    },
    remember_token: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    createdAt: {
      field: 'created_at',
      type: Sequelize.DATE,
      allowNull: true,
    },
    updatedAt: {
      field: 'updated_at',
      type: Sequelize.DATE,
      allowNull: true,
    }
    perm_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {         // User belongsTo Company 1:1
        model: 'Companies',
        key: 'id'
      }
    },
    activate: {
      type: Sequelize.INTEGER,
    },
    token: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    provider: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    provider_id: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    alamat: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    jk: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    tempat_lahir: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    tgl_lahir: {
      type: Sequelize.DATE,
      allowNull: true,
    }
  });

  return User;
};
