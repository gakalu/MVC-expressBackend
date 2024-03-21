# CS571 - Workshop 01
## MongoDB Rich Documents Workshop
Please find below a schema structure for a bank application, each document has the following structure for `banks` collection:
```JavaScript
{
    "_id":1,
    "name: "BOA",
    "users":[
        {"_id":1, "name": "Michael", "accounts":[
            {"_id":1, "type": "debit", "number": 123, "routing": 123, "amount": 100},
        ]}
    ]
}
```
Create an Express application that connects to a MongoDB instance (local or cloud service), and write code for 6 MongoDB queries within 3 pre-defined routes in `app.js` file:
1. Add a new account to a specific user
2. Update an account's balance
3. Delete an account
```JavaScript
// Add a new account to specific user
// The request body has {"_id":2, "type": "credit", "number": 456, "routing": 456, "amount": 50}
router.post('/banks/:bank_id/users/:user_id', async (req, res) => {
    // YOUR QUERY HERE
})

// Update a account's balance
// The request body has {"amount": 200}
router.patch('/banks/:bank_id/users/:user_id/accounts/:account_id', async (req, res) => {
    // YOUR QUERY HERE  
})

// Delete a student
router.delete('/banks/:bank_id/users/:user_id/accounts/:account_id', async (req, res) => {
    // YOUR QUERY HERE
})
```
*Note: Queries should comply with REST design
