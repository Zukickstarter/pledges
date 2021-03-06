const model = require('../server/model.js');
const example = require('../server/example.js');
const db = require('../database/db.js');


// ============== sample test ========================

test('example.nPlusTwo(4) returns 6', () => {
  expect(example.nPlusTwo(4)).toBe(6);
});


// ============= endpoint tests (todo) ===============

// test('/api/pledges/:id', async (done) => {
//   const res = await app.get('/api/pledges/5');
//   expect(typeof res.status).toBe('number');
//   expect(res.status).toBe(200);
//   done();
// });

// ============== model tests ========================


/**
 * model getPledges() test
 */
test('when given an id (integer from 1 to 100), model.getPledges() returns a promise containing pledge data', async (done) => {
  expect.assertions(7);
  return model.getPledgeData(5)
    .then((result) => {
      expect(result).toHaveProperty('id');
      expect(result).toHaveProperty('listingTitle');
      expect(result).toHaveProperty('pledges');
      expect(result).toHaveProperty('creator');
      expect(result).toHaveProperty('collaborators');
      expect(Array.isArray(result['pledges'])).toBe(true);
      expect(Array.isArray(result['collaborators'])).toBe(true);
      done();
    });
});


// ================ database tests ===================
/**
 * database getAllListings() test
 */
test('db.getAllListings returns an array of listings', async (done) => {
  expect.assertions(3);
  return db.getAllListings()
    .then((result) => {
      // console.log('result from db.getAllListings: ', result);
      expect(Array.isArray(result)).toBe(true);
      expect(result[0]).toHaveProperty('id');
      expect(result[0]).toHaveProperty('listingTitle');
      done();
    });
});

/**
 * database getCollaboratorsByListingId() test
 */
test('db.getCollaboratorsByListingId returns an array of collaborators', async (done) => {
  expect.assertions(5);
  return db.getCollaboratorsByListingId(4)
    .then((result) => {
      expect(Array.isArray(result)).toBe(true);
      expect(result[0]).toHaveProperty('id');
      expect(result[0]).toHaveProperty('imageURL');
      expect(result[0]).toHaveProperty('name');
      expect(result[0]).toHaveProperty('listingId');
      done();
    });
});

/**
 * database getPledgesByListingId test
 */
test('db.getPledgesByListingId returns an array of pledges from the pledgeOptions table', async (done) => {
  const listingId = 4;
  expect.assertions(9);
  return db.getPledgesByListingId(listingId)
    .then((result) => {
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).not.toBe(0);
      expect(result[0]).toHaveProperty('id');
      expect(result[0]).toHaveProperty('price');
      expect(result[0]).toHaveProperty('pledgeTitle');
      expect(result[0]).toHaveProperty('description');
      expect(result[0]).toHaveProperty('estDelivery');
      expect(result[0]).toHaveProperty('backers');
      expect(result[0]).toHaveProperty('listingId');
      done();
    });
});

/**
 * database getCreatorByListingId test
 */
test('db.getCreatorByListingId returns a row from creators table', async (done) => {
  expect.assertions(8);
  return db.getCreatorByListingId(8)
    .then((result) => {
      // expect(Array.isArray(result)).toBe(true);
      // expect(result.length).toBe(1);
      expect(result[0]).toHaveProperty('id');
      expect(result[0]).toHaveProperty('imageURL');
      expect(result[0]).toHaveProperty('name');
      expect(result[0]).toHaveProperty('location');
      expect(result[0]).toHaveProperty('description');
      expect(result[0]).toHaveProperty('lastLogin');
      expect(result[0]).toHaveProperty('website');
      expect(result[0]).toHaveProperty('listingId');
      done();
    });
});


