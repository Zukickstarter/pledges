# pledges

## **API Spec**

### Request

    `GET api/pledges/:zukoId`

### Response (JSON)

| Field | Type |
|--------| -------- |
| id | Integer |
| listingTitle | String |
| pledges | Array |
| creator | Object |
| collaborators | Array |


### Example Response:

```
{
    "id": 7,
    "listingTitle": "Ergonomic Granite Chair",
    "pledges": [
        {
            "id": 25,
            "price": "$1",
            "pledgeTitle": "Starter Pledge",
            "description": "Ergonomic Granite Chair Co. will send you 93097 Cars in the mail!",
            "estDelivery": "April 2022",
            "backers": 44,
            "listingId": 7,
            "createdAt": "2020-06-29T20:27:11.000Z",
            "updatedAt": "2020-06-29T20:27:11.000Z"
        },
        {
            "id": 26,
            "price": "$10",
            "pledgeTitle": "Average Pledge",
            "description": "Ergonomic Granite Chair Co. will send you 6692 Shoess in the mail!",
            "estDelivery": "February 2021",
            "backers": 23,
            "listingId": 7,
            "createdAt": "2020-06-29T20:27:11.000Z",
            "updatedAt": "2020-06-29T20:27:11.000Z"
        },
        {
            "id": 27,
            "price": "$100",
            "pledgeTitle": "Big Pledge",
            "description": "Ergonomic Granite Chair Co. will send you 12041 Keyboards in the mail!",
            "estDelivery": "June 2024",
            "backers": 1,
            "listingId": 7,
            "createdAt": "2020-06-29T20:27:11.000Z",
            "updatedAt": "2020-06-29T20:27:11.000Z"
        },
        {
            "id": 28,
            "price": "$1000",
            "pledgeTitle": "Massive Pledge!",
            "description": "Ergonomic Granite Chair Co. will send you 67532 Salads in the mail!",
            "estDelivery": "April 2023",
            "backers": 1,
            "listingId": 7,
            "createdAt": "2020-06-29T20:27:11.000Z",
            "updatedAt": "2020-06-29T20:27:11.000Z"
        }
    ],
    "creator": {
        "id": 7,
        "imageURL": "https://s3.amazonaws.com/uifaces/faces/twitter/opnsrce/128.jpg",
        "name": "Gonzalo Mueller",
        "location": "South Declan, Washington",
        "description": "Et officiis nulla perspiciatis illum dignissimos doloremque assumenda.",
        "lastLogin": "December 2019",
        "website": "http://frederique.name",
        "listingId": 7,
        "createdAt": "2020-06-29T20:27:11.000Z",
        "updatedAt": "2020-06-29T20:27:11.000Z"
    },
    "collaborators": [
        {
            "id": 31,
            "imageURL": "https://s3.amazonaws.com/uifaces/faces/twitter/psaikali/128.jpg",
            "name": "Monserrate Vandervort",
            "listingId": 7,
            "createdAt": "2020-06-29T20:27:11.000Z",
            "updatedAt": "2020-06-29T20:27:11.000Z"
        },
        {
            "id": 32,
            "imageURL": "https://s3.amazonaws.com/uifaces/faces/twitter/joannefournier/128.jpg",
            "name": "Orval Smitham",
            "listingId": 7,
            "createdAt": "2020-06-29T20:27:11.000Z",
            "updatedAt": "2020-06-29T20:27:11.000Z"
        },
        {
            "id": 33,
            "imageURL": "https://s3.amazonaws.com/uifaces/faces/twitter/vj_demien/128.jpg",
            "name": "Jessika Pfannerstill",
            "listingId": 7,
            "createdAt": "2020-06-29T20:27:11.000Z",
            "updatedAt": "2020-06-29T20:27:11.000Z"
        },
        {
            "id": 34,
            "imageURL": "https://s3.amazonaws.com/uifaces/faces/twitter/jonkspr/128.jpg",
            "name": "Deanna Cormier",
            "listingId": 7,
            "createdAt": "2020-06-29T20:27:11.000Z",
            "updatedAt": "2020-06-29T20:27:11.000Z"
        },
        {
            "id": 35,
            "imageURL": "https://s3.amazonaws.com/uifaces/faces/twitter/yigitpinarbasi/128.jpg",
            "name": "Gonzalo Rice",
            "listingId": 7,
            "createdAt": "2020-06-29T20:27:11.000Z",
            "updatedAt": "2020-06-29T20:27:11.000Z"
        }
    ]
}
```
---
## **Database Seed Instructions**
> 1. create file in this repo's root directory called "dbAuth.js" and add this code:
>>  ```module.exports = { dbPassword: [your db password here] };```
> 2. Add dbAuth.js to .gitignore
>
> 3. Open a terminal in this directory and pull up the mysql command line by typing
>> ```mysql -u root -p```
> 4. Once in the mysql terminal, enter the command:
> > ```create database pledgesDb;```
> 5. Confirm database has been created with command in mysql terminal:
> > ```show databases;```
> 6. Select correct database to use by typing this command into the mysql terminal:
> > ```use pledgesDb;```
> 7. **Open a new terminal in the same directory**
>
> 8. In the new terminal, initialize db tables with this command:
> >```npm run initDB```
> 9. To seed database, run command:
> > ```npm run seed```
> 10. Confirm database is properly seeded by switching back to mysql terminal and entering these four commands individually:
>> ```select * from listings;```
>
>> ```select * from collaborators;```
>
>> ```select * from pledgeOptions;```
>
>> ```select * from creators;```
>
> **NOTE: There should be 100 listings, 500 collaborators, 400 pledgeOptions, and 100 creators**
---