const  express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();
const PORT = 3005;

mongoose.connect('mongodb+srv://testUser:testPassword@novikoffclaster-ziz8y.gcp.mongodb.net/films',
    {   useNewUrlParser: true,
                useUnifiedTopology:true,
                useFindAndModify: false
            })

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql: true
}));
const dbConnection = mongoose.connection;

dbConnection.on('error',err=>console.log(`connection error: ${err}`));
dbConnection.once('open',()=>console.log(`Connected to DB ok!`));

app.listen(PORT,error => {
    error ? console.log(error) : console.log('Server started!');
})
