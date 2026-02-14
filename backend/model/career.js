import { DataTypes } from 'sequelize';
import { db } from '../configs/dbconnection.js';

const Career = db.define(
  'Career',
  {
    position: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    firm: {
      type: DataTypes.STRING(300),
      allowNull: false,
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    end_date: {
      type: DataTypes.DATEONLY,
    }
  },
  {
    tableName: 'careers',
    timestamps: true,
    underscored: true,
  }
);

export default Career;


// Assistant Professor of English
// V. O. Chidambaram College, Thoothukudi
// Oct 2021 - Dec 2022