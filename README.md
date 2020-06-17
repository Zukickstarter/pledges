# pledges
Pledges component


# Air Tree n Tree Recommendation Service

## API Spec

### Request

    `GET api/pledges/:zukoId`

### Response (JSON)

| Field | Type |
|--------| -------- |
| zukoId | String |
| pledges | Array |


#### Example pledge:

```
    {
        "id": "0",
        "title" : "100 stickers!",
        "price": "$25 or more",
        "description": "Co-founders Dave and Mary will send you 100 great stickers with the company logo on them!",
        "estDelivery": "October, 2020",
        "availibality": "Limited (25 of 30 left)",
        "currentBackers": "5 backers"
    }
```

