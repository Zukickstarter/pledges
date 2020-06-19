const { getPledgesByListingId } = require('../database/db.js');


const getPledges = (id) => {
  return getPledgesByListingId(id)
  .catch((err) => {
    console.log('error in getPledges: ', err);
  });
};

module.exports = { getPledges };