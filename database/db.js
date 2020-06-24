const { Sequelize, DataTypes } = require('sequelize');
// const { dbPassword } = require('../dbAuth.js');

const sequelize = new Sequelize('pledgesDb', 'root', 'gimmie', {
  host: 'localhost',
  dialect: 'mysql'
});

// ========================= table schemas ========================
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
 * defines schema for "pledgeOptions" table in pledgesDb
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


/**
 * defines schema for "creators" table
 */
const Creator = sequelize.define('creator', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  imageURL: {
    type: DataTypes.STRING
  },
  name: {
    type: DataTypes.STRING
  },
  location: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.STRING
  },
  lastLogin: {
    type: DataTypes.STRING
  },
  website: {
    type: DataTypes.STRING
  },
  listingId: {
    type: DataTypes.INTEGER,
    references: {
      model: Listing,
      key: 'id'
    }
  }
});

/**
 * defines schema for "collaborators" table
 */
const Collaborator = sequelize.define('collaborator', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  imageURL: {
    type: DataTypes.STRING
  },
  name: {
    type: DataTypes.STRING
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
Creator.belongsTo(Listing);
Collaborator.belongsTo(Listing);

// ========================== init db =================================
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
    .then(() => {
      Collaborator.sync({ force: true });
    })
    .then(() => {
      Creator.sync({ force: true });
    })
    .catch((err) => {
      console.log('error in PledgeOption.sync: ', err);
    });
};

// ======================= queries ===========================

/**
 * returns a single listing from the "listings" table
 * @param {integer} id
 */
const getListingById = async (id) => {
  return Listing.findAll({
    where: {
      id: id
    }
  })
    .catch((err) => {
      console.log('error in getListingById: ', err);
    });
};

/**
 * executes a sequelize findAll() on pledgeOptions table where listingId = id
 * returns a promise
 * @param {id} id
 */
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
 * returns the creator of a given listing by listing id. returns a promise.
 * @param {integer} id
 */
const getCreatorByListingId = async (id) => {
  return Creator.findAll({
    where: {
      listingId: id
    }
  })
    .catch((err) => {
      console.log('there was an error getting the creator in db.getCreatorByListingId: ', err);
      return err;
    });
};

/**
 * gets all rows from "collaborators" table that match the given id. returns a promise.
 * @param {integer} id
 */
const getCollaboratorsByListingId = async (id) => {
  return Collaborator.findAll({
    where: {
      listingId: id
    }
  })
    .catch((err) => {
      console.log('there was an error getting all collaborators in db.getCollaboratorsByListingId: ', err);
      return err;
    });
};

/**
 * gets all from "listings" table. returns a promise
 */
const getAllListings = async () => {
  return Listing.findAll({})
    .catch((err) => {
      console.log('there was an error getting all listings from the db: ', err);
    });
};

// ===================== seed functions ======================
/**
 * adds a single listing to the listings table in pledgesDb. returns a promise.
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
 * adds four rows to the "pledgeOptions" table in pledgesDb. returns a promise.
 * @param {arrayOfPledges} arrayOfPledges
 */
const addFourPledges = async (arrayOfPledges) => {
  return PledgeOption.bulkCreate(arrayOfPledges)
    .catch((err) => {
      console.log('error inside of db.addFourPledges: ', err);
      return err;
    });
};

/**
 * adds a row to the "creators" table. returns a promise.
 * @param {object} creatorData
 */
const addCreator = async (creatorData) => {
  return Creator.create(creatorData)
    .catch((err) => {
      console.log('error in db.addCreator: ', err);
      return err;
    });
};

/**
 * bulk adds rows to the "collaborators" table. returns a promise.
 * @param {array} arrayOfCollaborators
 */
const addFiveCollaborators = async (arrayOfCollaborators) => {
  return Collaborator.bulkCreate(arrayOfCollaborators)
    .catch((err) => {
      console.log('error inside of db.addFiveCollaborators: ', err);
      return err;
    });
};

// ======================== auth =============================
sequelize.authenticate()
  .then(() => {
    console.log('connected to the db');
  })
  .catch((err) => {
    console.log('error connecting to the db: ', err);
  });


// ======================== exports ==========================
module.exports = {
  initializeDatabase,
  addListing,
  addFourPledges,
  getPledgesByListingId,
  getAllListings,
  getCreatorByListingId,
  getCollaboratorsByListingId,
  getListingById
};
