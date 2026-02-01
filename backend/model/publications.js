import { DataTypes } from 'sequelize';
import { db } from '../configs/dbconnection.js';

const Publication = db.define(
  'Publication',
  {
    paper_title: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    journal_name: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    publication_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    volume: {
      type: DataTypes.STRING(100),
    },
    impact_factor: {
      type: DataTypes.DECIMAL(5, 2),
    },
    issn: {
      type: DataTypes.STRING(20),
    },
    page_start: {
      type: DataTypes.INTEGER,
    },
    page_end: {
      type: DataTypes.INTEGER,
    },
    indexed_in: {
      type: DataTypes.STRING(100),
    },
  },
  {
    tableName: 'publications',
    timestamps: true,
    underscored: true,
  }
);

export default Publication;
