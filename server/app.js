const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')

require('dotenv').config();

const app = express()

// connect to mlab database
var mongodb_url = process.env.MONGOLAB_URL;
mongoose
 .connect(
  "mongodb+srv://new-user_lufi:lufi1234@cluster0-mgvbm.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
 )
 .then(() => console.log("Connected to MongoDB Atlas"))
 .catch(err => console.log("Error: ", err.message));

app.use('/graphql', graphqlHTTP ({
    schema,
    graphiql: true
}))

app.listen(4000, () => {
    console.log('now listening for requests on port 4000')
})