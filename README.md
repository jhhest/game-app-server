# http requests

http :5000/secret-endpoint Authorization:"Bearer $2b$10$LBPIZnwgXq3hSSz0YHU4G.zX0w3F1EDc./S0CZG9D7i4Ao9LhpJ8G"

# Postgres with docker.  

docker run -p 5432:5432 --name game-server -e POSTGRES_PASSWORD=password -d postgres

# game server setup

- Create a User: Model, endpoints, bcrypt, (signup)
- Login: jwt, endpoint, bcrypt
- Auth Middleware: check jwt, add user object to request

Notes From Reijn.
Setup docker postgres

- Setup Cors

Route: POST user

- Load your routes (if using a Router)
- Validate request (do we have email & password)
- Create User model
- Sync model to the DataBase
- install dependencies: bcrypt, jwt
- Hash password using brypt
- When we get a request: create a User
- Return response (status code) 201
- Handle bad requests
- Check response form server
- Create action for SIGNUP_SUCCES (normal action)
- Dispatch SIGNUP_SUCCES
- Create reducer for user
- Handle SIGNUP_SUCCES action
- Map state to props in component
- Display feedback to user
