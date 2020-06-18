const faker = require('faker');
const { addListing } = require('./db.js');

// ===================== helpers ======================

// create randomNumber of any size
const randomNumber = () => {
  return faker.random.number();
};

// create fake product
const randomProduct = () => {
  return faker.commerce.product();
};

// create random future date in "[month] [year]" format
const randomFutureDate = () => {
  let result = '';
  result += faker.date.month();
  result += ' ';
  let year = (2020 + Math.floor(Math.random() * 5)).toString();
  result += year;
  return result;
};

// ===================================================

// create fake listing product
const createRandomListingProduct = () => {
  return faker.commerce.productName();
};


let prices = ['$1', '$10', '$100', '$1000'];
let pledgeTitles = ['Starter Pledge', 'Average Pledge', 'Big Pledge', 'Massive Pledge!'];
// create four pledges associated with each listing
const createFourPledges = (listingId) => {
  let result = [];
  for (let i = 0; i < 4; i++) {
    let pledge = {
      price: prices[i],
      pledgeTitle: pledgeTitles[i],
      description: `${listingTitle} Co. will send you ${randomNumber()} ${randomProduct()}'s in the mail!`,
      estDelivery: randomFutureDate(),
      currentBackers: Math.floor(Math.random() * 50),
      listingId: listingId
    };
  }
};

let randomDate = randomFutureDate()
console.log('randomDate: ', randomDate);

const seedlListingAndPledges = () => {
  // generate product
  let listingProduct = createRandomListingProduct();
  return addListing(listingProduct)
  .then((dbResponse) => {
    return dbResponse.dataValues.id;
  })
  .then((listingId) => {
    let fourPledges = createFourPledges(listingId);
  })

  // add product to listings table

  // return product's listings table primary id

  // create four pledges associated with that listing:
  //
};
