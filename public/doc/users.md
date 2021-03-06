**Users List**
----------

### GET **/v1/users**


List all users.


**Request Parameters**

| Parameter | Validate   | Type   | Value | Default | Note |
|:---------:|:------:|:--------:|:-----:|:-----:|:-----:|
|offset	|optional	|int	|1/2/3...	|1	|For pagination. |
|limit	|optional	|int	| 	|10	|For pagination. |
|userId	|optional	|int	|	|	|Same effect as "GET /users/:id".|
|gender	|optional	|int	|0/1/2	|	|Filter users by gender. Value 0 for unspecified; 1 for male; 2 for female.|
|asc	|optional	|int	|1/2	|	|List by name  in ascending order. Value 1 by first name; 2 by last name.|

**Sample Request**

GET {ServerPath}/v1/users?gender=2&asc=1&offset=10&limit=5

**Sample Success Response**

```json
{
	"status": 200,
	"data":[
        	{
			"userId": "3999",
			"username": "az123",
			"name": {
				"first": "Aleen",
				"middle": "",
				"last": "Zhang"
			},
			"gender": 2,
			"contactInfo": {
				"email": "az@gmail.com",
				"phone": "123-456-7890",
			}
		},
		{
			"userId": "3690",
			"username": "godlike",
			"name": {
				"first": "Cathy",
				"middle": "L.",
				"last": "Dogde"
			},
			"gender": 2,
			"contactInfo": {
				"email": "cld@gmail.com",
				"phone": "223-456-7890",
			}
		},
		...
	],
	"links": [
		{
			"ref":"prev",
			"href":"{ServerPath}/v1/users?gender=2&asc=1&offset=5&limit=5"
		},
		{
			"ref":"next",
			"href":"{ServerPath}/v1/users?gender=2&asc=1&offset=15&limit=5"
		},
		{
			"ref":"first",
			"href":"{ServerPath}/v1/users?gender=2&asc=1&offset=0&limit=5"
		},
		{
			"ref":"last",
			"href":"{ServerPath}/v1/users?gender=2&asc=1&offset=995&limit=5"
		}
	]
}
```

**Possible Error Response**

```json
{
	"status": 404,
	"data": "Resource not found."
}
```
```json
{
	"status": 500,
	"data": "Internal server error."
}
```



---
### POST **/v1/users**

Create new users.


**Request Body**

| Attribute | Validate   | Type   | Value | Default | Note |
|:---------:|:------:|:--------:|:-----:|:-----:|:-----:|
|username	|required	|string	| 	|	|Rule to be designed.  |
|password	|required	|string	| 	|	|Rule to be designed.  |
|name	|required	|JSONObject	| 	|	| 	|
|name.first	|required	|string	| 	|	|  |
|name.middle	|optional	|string	| 	| 	|   |
|name.last	|required	|string	| 	|	|   |
|gender	|optional	|int	|0/1/2	| 	| |
|contact	|required	|JSONObject	|   	| 	| 	|
|contact.email	|required	|string	| 	| 	|   |
|contact.phone	|optional	|string	| 	| 	|   |

**Sample Request**

POST {ServerPath}/v1/users

*HTTP Body*
```json
{
	"username": "RahXephone",
	"password": "dolem",
	"name": {
		"first": "Olin",
		"last": "Staccato"
	},
	"gender": 2,
	"contactInfo": {
		"email": "os@gmail.com"
	}
}
```

**Sample Success Response**

*HTTP Header*
```
Location:{ServerPath}/v1/users/9999
```
*HTTP Body*
```json
{
	"status": 201
}
```

**Possible Error Response**

```json
{
	"status": 400,
    "data": "Invalid request: Bad data."
}
```
```json
{
	"status": 500,
	"data": "Internal server error."
}
```



---
### PUT **/v1/users**

Update user info in batch with complete info.


**Request Body**

| Attribute | Validate   | Type   | Value | Default | Note |
|:---------:|:------:|:--------:|:-----:|:-----:|:-----:|
|userId	|required	|string	|	|	|Rule to be designed.  |
|password	|required	|string	|	|	|Rule to be designed.  |
|name	|required	|JSONObject	|	|	|	|
|name.first	|required	|string	|	|	|   |
|name.middle	|required	|string	|	|	|  |
|name.last	|required	|string	|	|	|   |
|gender	|required	|int	|0/1/2	|	|Filter users by gender. Value 0 for unspecified; 1 for male; 2 for female.|
|contact	|required	|JSONObject	|	|	|  |
|contact.email	|required	|string	|	|	|  |
|contact.phone	|required	|string	|	|	|  |

**Sample Request**

PUT {ServerPath}/v1/users

*HTTP Body*
```json
{
	"userId": "9999",
	"password": "dolem",
	"name": {
		"first": "Olin",
		"last": "Staccato"
	},
	"gender": 2,
	"contactInfo": {
		"email": "os@gmail.com",
		"phone": "",
	}
}
```

**Sample Success Response**

```json
{
	"status": 200
}
```

**Possible Error Response**

```json
{
	"status": 400,
	"data": "Invalid request: Bad data."
}
```
```json
{
	"status": 500,
	"data": "Internal server error."
}
```



---
### PATCH **/v1/users**

Update user info in batch with partial info.


**Request Body**

| Attribute | Validate   | Type   | Value | Default | Note |
|:---------:|:------:|:--------:|:-----:|:-----:|:-----:|
|userId	|required	|string	|	|	|Rule to be designed.  |
|password	|optional	|string	|	|	|Rule to be designed.  |
|name	|optional	|JSONObject	|	|	|	|
|name.first	|optional	|string	|	|	|   |
|name.middle	|optional	|string	|	|	|  |
|name.last	|optional	|string	|	|	|   |
|gender	|optional	|int	|0/1/2	|	|Filter users by gender. Value 0 for unspecified; 1 for male; 2 for female.|
|contact	|optional	|JSONObject	|	|	|  |
|contact.email	|optional	|string	|	|	|  |
|contact.phone	|optional	|string	|	|	|  |

**Sample Request**

PATCH {ServerPath}/v1/users

*HTTP Body*
```json
{
	"userId": "9999",
	"name": {
		"first": "Olin",
		"last": "Staccato"
	},
	"gender": 1,
}
```

**Sample Success Response**

```json
{
	"status": 201
}
```

**Possible Error Response**

```json
{
	"status": 400,
	"data": "Invalid request: Bad data."
}
```
```json
{
	"status": 500,
	"data": "Internal server error."
}
```



---
### DELETE **/v1/users**

Delete all users.


**Sample Request**

DELETE {ServerPath}/v1/users

**Sample Success Response**

```json
{
	"status": 200
}
```

**Error Response**

```json
{
	"status": 500,
	"data": "Internal server error."
}
```



**User Account**
---
### GET **/v1/users/:id**

Retrieve a user given id.


**Request Parameters**

| Parameter | Validate   | Type   | Value | Default | Note |
|:---------:|:------:|:--------:|:-----:|:-----:|:-----:|

**Sample Request**

GET {ServerPath}/v1/users/3999

**Sample Success Response**

```json
{
	"status": 200,
	"data":{
		"userId": "3999",
		"username": "az123",
		"name": {
			"first": "Aleen",
			"middle": "",
			"last": "Zhang"
		},
		"gender": 2,
		"contactInfo": {
			"email": "az@gmail.com",
			"phone": "123-456-7890",
		}
	}
}
```

**Possible Error Response**

```json
{
	"status": 404,
	"data": "Resource not found."
}
```
```json
{
	"status": 500,
	"data": "Internal server error."
}
```



---
### POST **/v1/users/:id**

Invalid request. <br>
* If adding new users, see "POST /v1/users".


**Error Response**
```json
{
	"status": 400,
	"data": "Invalid request: Method not allowed."
}
```



---
### PUT **/v1/users/:id**

Update a user given id with complete info. Same effect as PUT /v1/users with id in request body.


**Request Body**

| Attribute | Validate   | Type   | Value | Default | Note |
|:---------:|:------:|:--------:|:-----:|:-----:|:-----:|
|password	|required	|string	|	|	|Rule to be designed.  |
|name	|required	|JSONObject	|	|	|	|
|name.first	|required	|string	|	|	|  |
|name.middle	|required	|string	|	|	|  |
|name.last	|required	|string	|	|	|  |
|gender	|required	|int	|0/1/2	|	|Filter users by gender. Value 0 for unspecified; 1 for male; 2 for female.|
|contact	|required	|JSONObject	|	|	|	|
|contact.email	|required	|string	|	|	|  |
|contact.phone	|required	|string	|	|	|  |

**Sample Request**

PUT {ServerPath}/v1/users/9999

*HTTP Body*
```json
{
	"password": "dolemmelod",
	"name": {
		"first": "Olin",
		"middle": "",
		"last": "Spaghetti"
	},
	"gender": 1,
	"contactInfo": {
		"email": "os@gmail.com",
		"phone": "",
	}
}
```

**Sample Success Response**

```json
{
	"status": 200
}
```

**Possible Error Response**

```json
{
	"status": 400,
	"data": "Error Message"
}
```
```json
{
	"status": 500,
	"data": "Error Message"
}
```



---
### PATCH **/v1/users/:id**

Update a user given id with partial info. Same effect as PATCH /v1/users with id in request body.


**Request Body**

| Attribute | Validate   | Type   | Value | Default | Note |
|:---------:|:------:|:--------:|:-----:|:-----:|:-----:|
|password	|optional	|string	|	|	|Rule to be designed.  |
|name	|optional	|JSONObject	|	|	|	|
|name.first	|optional	|string	|	|	|  |
|name.middle	|optional	|string	|	|	|  |
|name.last	|optional	|string	|	|	|  |
|gender	|optional	|int	|0/1/2	|	|Filter users by gender. Value 0 for unspecified; 1 for male; 2 for female.|
|contact	|optional	|JSONObject	|	|	|	|
|contact.email	|optional	|string	|	|	|  |
|contact.phone	|optional	|string	|	|	|  |

**Sample Request**

PATCH {ServerPath}/v1/users/9999

*HTTP Body*
```json
{
	"password": "dolemmelod",
	"name": {
		"last": "Spaghetti"
	}
}
```

**Sample Success Response**

```json
{
	"status": 201
}
```

**Possible Error Response**

```json
{
	"status": 400,
	"data": "Error Message"
}
```
```json
{
	"status": 500,
	"data": "Error Message"
}
```



---
### DELETE **/v1/users/:id**

Delete a user given id.


**Sample Request**

DELETE {ServerPath}/v1/users/3999

**Sample Success Response**

```json
{
	"status": 200
}
```

**Error Response**

```json
{
	"status": 500,
	"data": "Internal server error."
}
```

