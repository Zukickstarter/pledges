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

/**
 * defines schema for "pledgeOptions" table in pledgeDb
 */
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


PledgeOption.belongsTo(Listing);

/**
 * initializes database with tables "listings" and "pledgeOptions"
 */
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


const getPledgesByListingId = async (id) => {
  return PledgeOption.findAll({
    where: {
      listingId: id
    }
  })
  .catch((err) => {
    console.log(`there was an error getting the pledges with id ${id}: `, err);
    return err;
  });
};

/**
 * adds a single listing to the listings table in pledgesDb
 * @param {productName} productName
 */
const addListing = async (productName) => {
  return Listing.create({listingTitle: productName})
  .catch((err) => {
    console.log('error in db.addListing: ', err);
    return err;
  });
};

/**
 * adds four rows to the "pledgeOptions" table in pledgesDb
 * @param {arrayOfPledges} arrayOfPledges
 */
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



module.exports = {
  initializeDatabase,
  addListing,
  addFourPledges,
  getPledgesByListingId
};