const {
  getListingById,
  getPledgesByListingId,
  getCreatorByListingId,
  getCollaboratorsByListingId
} = require('../database/db.js');

/**
 * model function that takes a listing id.
 * returns a promise from getPledgesByListingId() in ../database/db.js
 * @param {id} id
 */
const getPledgeData = (id) => {
  let promiseArray = [];
  promiseArray.push(getListingById(id));
  promiseArray.push(getPledgesByListingId(id));
  promiseArray.push(getCreatorByListingId(id));
  promiseArray.push(getCollaboratorsByListingId(id));
  return Promise.all(promiseArray)
    .then((arr) => {
      let [ listing, pledges, creator, collaborators ] = arr;
      let id = listing[0].id;
      let listingTitle = listing[0].listingTitle;
      let result = { id, listingTitle, pledges, creator, collaborators };
      result.creator = result.creator[0];
      return result;
    })
    .catch((err) => {
      console.log('error inside getPledgeData: ', err);
      return err;
    });
};

module.exports = { getPledgeData };