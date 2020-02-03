var express = require('express')
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
type User {
    id: String
    name: String
   }

   type Query {
       user(id: String): User
   }
`)

// Maps id to User object
var fakeDatabase = {
    'a' : {
        id: 'a',
        name: 'alice',
    },
    'b': {
        id: 'b',
        name: 'bob',
    },
};

var root = {
    user: ({id}) => {
        return fakeDatabase[id];
    }
};

var app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(4000, () => {
    console.log('Running a GraphQL API server at http://localhost:4000/graphql');

});