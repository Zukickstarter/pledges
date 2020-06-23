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
  expect.assertions(1);
  return model.getPledges(5)
    .then((result) => {
      expect(Array.isArray(result)).toBe(true);
      expect(result[0])
    })
    .catch((err) => {
      console.log('there was an error in the model test: ', err);
    })
    .then(() => {
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
    })
    .catch((err) => {
      console.log('there was an error while testing db.getAllListings: ', err);
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
    })
    .catch((err) => {
      console.log('there was an error while testing db.getPledgesByListingId: ', err);
      done();
    });
});