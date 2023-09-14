module.exports = (sequelize, DataTypes) => {
    const submitted_assignment = sequelize.define('submitted_assignment', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT,
      },
      submission_status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'pending',
      },
      assignment_id: {
        allowNull: false,
        type: DataTypes.BIGINT,
        references: {
          model: "assignments",
          key: "id",
        },
      },
      submission_date: {
        type: DataTypes.DATE,
        allowNull: true,
        validate: {
          isDate: true,
        },
        defaultValue: null
      },
      instructor_id: {
        allowNull: false,
        type: DataTypes.BIGINT,
        references: {
          model: "users",
          key: "id",
        },
      },
      student_id: {
        allowNull: false,
        type: DataTypes.BIGINT,
        references: {
          model: "users",
          key: "id",
        },
      },
    }, {
      paranoid: true,
      timestamps: true,
      underscored: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: 'deleted_at',
    });
  
    submitted_assignment.associate = (models) => {
      // Define associations here
      submitted_assignment.belongsTo(models.User, {
        foreignKey: 'instructor_id',
        as: 'instructorAssignment',
      });
      submitted_assignment.belongsTo(models.User, {
        foreignKey: 'student_id',
        as: 'submitted_assignments',
      });

      submitted_assignment.belongsTo(models.Assignment, {
        foreignKey: 'assignment_id',
        as: 'assignments',
      });

    };
  
    return submitted_assignment;
  };
  