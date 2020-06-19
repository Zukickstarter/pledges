const { getPledgesByListingId } = require('../database/db.js');

/**
 * model function that takes a listing id.
 * returns a promise from getPledgesByListingId() in ../database/db.js
 * @param {id} id
 */
const getPledges = (id) => {
  return getPledgesByListingId(id)
  .catch((err) => {
    console.log('error in getPledges: ', err);
  });
};



module.exports = { getPledges };