import { ApolloServer } from 'apollo-server';
import dotenv from 'dotenv';
dotenv.config();
import { typeDefs, resolvers } from './graphql.js';


const server = new ApolloServer({
    typeDefs,
    resolvers
});


server.listen(process.env.PORT).then( ({url}) => console.log( `Server is running on ${url}`) );

