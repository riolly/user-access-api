# user-access-api
User registration, login, and get user info.

## Installation
```bash
npm i
```

## DB Setup
In config.ts provide a **database name, username, and password** to connect to your local database and make sure it's running. 

## Run the service 
1. Compile typescript into javascript
```bash
npm run watch
```

2. Run the program
```bash
npm run start
```
or 
```bash
npm run dev
```

## End-points
### Register
POST localhost:4000/register

**Request body**
```
{
  email: "foo@gmail.com",
  password: "bar"
}
```

Successful response
```
201 Created
{
  message: "register success",
}
```

Failed response
```
400 Bad request
{
  error: "please fill email and password correctly'" 
}
```

### Login
POST localhost:4000/login

**Request body**
```
{
  email: "foo@gmail.com",
  password: "bar"
}
```

Successful response
```
200 Success
{
  message: "login success",
  access_token: "asfi08u2rujnp9vwy9ufh9hadsf9*H7g073g08h&yh78H0HD1N"
}
```

Failed response
```
400 Bad request
{
  error: "please provide email and password" 
}

400 Bad request
{
  error: "wrong email or password" 
}
```

### getUser
Use the access_token from login to get the user data

GET localhost:4000/getUser

**Request headers**
```
{
  access_token: "amvi0h8y9ughuiedbv7r8vgh7HC&yg&YG*^G*YGOIL"
}
```

Successful response
```
200 Success
{
  id: 1,
  email: "foo@gmail.com",
  iat: 12390712073
}
```

Failed response
```
400 Bad request
{
  error: "please provide a valid access token" 
}

401 Unauthorized
{
  error: "invalid token" 
}
```