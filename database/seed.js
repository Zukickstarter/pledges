const faker = require('faker');
const { addListing, addFourPledges, addCreator, addFiveCollaborators } = require('./db.js');

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
 * create random past date in "[month] [year]" format
 */
const randomPastDate = () => {
  let result = '';
  result += faker.date.month();
  result += ' ';
  let year = (2020 - Math.ceil(Math.random() * 2)).toString();
  result += year;
  return result;
}

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
  let listingTitle = dataValues.listingTitle;
  let result = [];
  for (let i = 0; i < 4; i++) {
    let pledge = {
      price: prices[i],
      pledgeTitle: pledgeTitles[i],
      description: `${listingTitle} Co. will send you ${randomNumber()} ${randomProduct()}s in the mail!`,
      estDelivery: randomFutureDate(),
      backers: Math.floor(Math.random() * 50),
      listingId: listingId
    };
    result.push(pledge);
  }
  return result;
};


const createProfile = async (id) => {
  let imageURL = faker.image.avatar();
  let name = faker.name.firstName() + ' ' + faker.name.lastName();
  let location = faker.address.city() + ', ' + faker.address.state();
  let description = faker.lorem.sentence();
  let lastLogin = randomPastDate();
  let website = faker.internet.url();
  let listingId = id;
  let profile = { imageURL, name, location, description, lastLogin, website, listingId };
  return profile;
};


/**
 * create a single "collaborator" profile
 */
const createCollaborator = (id) => {
  let imageURL = faker.image.avatar();
  let name = faker.name.firstName() + ' ' + faker.name.lastName();
  let listingId = id;
  let result = { imageURL, name, listingId };
  return result;
};

const createFiveCollaborators = (id) => {
  let result = [];
  for (let i = 0; i < 5; i++) {
    result.push(createCollaborator(id));
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
      console.log('dataValues: ', dataValues);
      let promiseArray = [];

      // create four pledges associated with that listing:
      let fourPledges = createFourPledges(dataValues);
      promiseArray.push(addFourPledges(fourPledges));

      // create a creator profile associated with that listing
      createProfile(dataValues.id)
        .then((profile) => {
          promiseArray.push(addCreator(profile));
        })
        .catch((err) => {
          console.log('there was an error creating the profile: ', err);
        })

      // create five collaborators associated with that listing
      let fiveCollaborators = createFiveCollaborators(dataValues.id);
      promiseArray.push(addFiveCollaborators(fiveCollaborators));

      return Promise.all(promiseArray);
    })
    .then((dbResponses) => {
      console.log('success! dbResponses: ', dbResponses);
    })
    .catch((err) => {
      console.log('error seeding data: ', err);
    });
};

/**
 * seeds 100 listings to the db
 */
const populate100Listings = () => {
  for (let i = 0; i < 100; i++) {
    seedListingAndPledges();
  }
};



// populate100Listings();

