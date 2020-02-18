# http requests

http :5000/secret-endpoint Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNTgxOTU1MTY4LCJleHAiOjE1ODE5NjIzNjh9.MIDEbezQQHOHHSfmd4awnzhqnbnRtK-c3pdVA21gnho"

# Postgres with docker.  

docker run -p 5432:5432 --name game-server -e POSTGRES_PASSWORD=password -d postgres

# game server setup

- Create a User: Model, endpoints, bcrypt, (signup)
- Login: jwt, endpoint, bcrypt
- Auth Middleware: check jwt, add user object to request

### todo

## Frontend

Draw a wireframe of the gamelobby.

## Backend

- [ ] Room model -> with id and home -> make a relationship. -> User.belongsTo(Room)
- [ ] route to create a room -> Protected and test it with http pie.
- [ ] stream -> "/stream" -> get allrooms and send on streem.
- [ ] client side -> connect to room on app.js -> dispatch action/ setup reducer for rooms.
