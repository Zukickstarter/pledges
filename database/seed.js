const faker = require('faker');
const { addListing, addFourPledges } = require('./db.js');

// ===================== helpers ======================

/**
 * create randomNumber of any size
 */
const randomNumber = () => {
  return faker.random.number();
};

/**
 * create fake product
 */
const randomProduct = () => {
  return faker.commerce.product();
};

/**
 * create random future date in "[month] [year]" format
 */
const randomFutureDate = () => {
  let result = '';
  result += faker.date.month();
  result += ' ';
  let year = (2020 + Math.floor(Math.random() * 5)).toString();
  result += year;
  return result;
};

/**
 * create fake listing product
 */
const createRandomListingProduct = () => {
  return faker.commerce.productName();
};

/**
 * define four pledge prices and associate them with pledgeTitles by index
 */
let prices = ['$1', '$10', '$100', '$1000'];
let pledgeTitles = ['Starter Pledge', 'Average Pledge', 'Big Pledge', 'Massive Pledge!'];

/**
 * create four pledges associated with each listing
 * @param {string} dataValues
 */
const createFourPledges = (dataValues) => {
  let listingId = dataValues.id;
  let listingTitle = dataValues.listingTitle
  let result = [];
  for (let i = 0; i < 4; i++) {
    let pledge = {
      price: prices[i],
      pledgeTitle: pledgeTitles[i],
      description: `${listingTitle} Co. will send you ${randomNumber()} ${randomProduct()}'s in the mail!`,
      estDelivery: randomFutureDate(),
      backers: Math.floor(Math.random() * 50),
      listingId: listingId
    };
    result.push(pledge);
  }
  return result;
};

// // test createFourPledges
// let fourPledges = createFourPledges({id: 3, listingTitle: 'testTitle'});
// console.log('fourPledges: ', fourPledges);


// =================== seed =====================================

/**
 * adds 1 listing and four associated pledges to the db
 */
const seedListingAndPledges = () => {
  // generate product
  let listingProduct = createRandomListingProduct();

  // add product to listings table
  return addListing(listingProduct)
  // return product's listings table id and listingTitle
  .then((dbResponse) => {
    console.log('dbResponse.dataValues: ', dbResponse.dataValues);
    return dbResponse.dataValues;
  })
  .then((dataValues) => {
    // create four pledges associated with that listing:
    let fourPledges = createFourPledges(dataValues);
    // add four pledges to the pledges table
    return addFourPledges(fourPledges);
  })
  .then((dbResponse) => {
    console.log('success! dbResponse.dataValues: ', dbResponse.dataValues);
  })
  .catch((err) => {
    console.log('error seeding data: ', err);
  })
};

/**
 * seeds 100 listings to the db
 */
const populate100Listings = () => {
  for (let i = 0; i < 100; i++) {
    seedListingAndPledges();
  }
};

populate100Listings();
