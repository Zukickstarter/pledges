const { Sequelize, DataTypes } = require('sequelize');
const { dbPassword } = require('../dbAuth.js');

const sequelize = new Sequelize('pledgesDb', 'root', dbPassword, {
  host: 'localhost',
  dialect: 'mysql'
});

/**
 * defines schema for "listings" table in pledgesDb
 */
const Listing = sequelize.define('listing', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  listingTitle: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false
});

const PledgeOption = sequelize.define('pledgeOption', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  price: {
    type: DataTypes.STRING
  },
  pledgeTitle: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.STRING
  },
  estDelivery: {
    type: DataTypes.STRING
  },
  backers: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  listingId: {
    type: DataTypes.INTEGER,
    references: {
      model: Listing,
      key: 'id'
    }
  }
});

// // not yet known if needed:
PledgeOption.belongsTo(Listing);

const initializeDatabase = async () => {
  Listing.sync({ force: true })
  .catch((err) => {
    console.log('error in Listing.sync: ', err);
  })
  .then(() => {
    PledgeOption.sync({ force: true });
  })
  .catch((err) => {
    console.log('error in PledgeOption.sync: ', err);
  });
};

const addListing = async (productName) => {
  return Listing.create({listingTitle: productName})
  .catch((err) => {
    console.log('error in db.addListing: ', err);
    return err;
  });
};

const addFourPledges = (arrayOfPledges) => {
  return PledgeOption.bulkCreate(arrayOfPledges)
  .catch((err) => {
    console.log('error inside of db.addFourPledges: ', err);
    return err;
  });
};


sequelize.authenticate()
.then(() => {
  console.log('connected to the db');
})
.catch((err) => {
  console.log('error connecting to the db: ', err);
});



module.exports = { initializeDatabase, addListing, addFourPledges };