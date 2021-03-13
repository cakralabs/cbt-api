module.exports = (sequelize, Sequelize) => {
  const Siswa = sequelize.define("siswa", {
    user_id: {
      type: Sequelize.STRING,
      allowNull: true,
      references: {         // User belongsTo Company 1:1
        model: 'User',
        key: 'id'
      }
    },
    username: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    raw_password: {
      type: Sequelize.STRING
    },
    name: {
      type: Sequelize.STRING
    },
    jenis_kelamin: {
      type: Sequelize.STRING
    },
    tempat_lahir: {
      type: Sequelize.STRING
    },
    tanggal_lahir: {
      type: Sequelize.STRING
    },
    nisn: {
      type: Sequelize.STRING
    },
    nis: {
      type: Sequelize.STRING
    },
    agama: {
      type: Sequelize.STRING
    },
    rombel: {
      type: Sequelize.STRING
    },
    createdAt: {
      field: 'created_at',
      type: Sequelize.DATE,
    },
    updatedAt: {
      field: 'updated_at',
      type: Sequelize.DATE,
    }
  }/*, {
    timestamps: false
  }*/);

  return Siswa;
};
