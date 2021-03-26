# Bytebank API
Rest API made with AdonisJS to speed up things. This is a simple project to assist the [Bytebank Flutter App](https://github.com/edscaylart/bytebank).

## Install
```bash
$ yarn
$ docker-compose up
$ node ace serve
```

## End-points
* **GET:** `/transactions`
  * return all the transactions made for your contact
```json
// response body
[
  {
    "id": 1,
    "contact_id": 1,
    "value": 250,
    "created_at": "2021-03-26T17:47:09.553-04:00",
    "contact": {
      "id": 1,
      "name": "John doe",
      "document": "04859856555",
      "agency": 2565,
      "account_number": 152365,
      "created_at": "2021-03-26T17:47:09.460-04:00",
      "updated_at": "2021-03-26T17:47:09.478-04:00",
      "nameInitials": "IF"
    }
  }
]
```
* **POST:** `/transactions`
  * return create a new transaction with the contact
```json
// request body
{
  "value": 100,
  "contact": {
    "name": "John doe",
    "document": "04859856555",
    "agency": 2565,
    "account_number": 152365
  }
}
// response body
{
  "id": 1,
  "contact_id": 1,
  "value": 250,
  "created_at": "2021-03-26T17:47:09.553-04:00",
  "contact": {
    "id": 1,
    "name": "John doe",
    "document": "04859856555",
    "agency": 2565,
    "account_number": 152365,
    "created_at": "2021-03-26T17:47:09.460-04:00",
    "updated_at": "2021-03-26T17:47:09.478-04:00",
    "nameInitials": "IF"
  }
}
```
