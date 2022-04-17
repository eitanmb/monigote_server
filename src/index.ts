import { ApolloServer } from 'apollo-server';
import dotenv from 'dotenv';
import { typeDefs, resolvers } from './graphql';

dotenv.config();

const PORT: string | undefined = process.env.PORT;

if (!PORT) {
    process.exit(1);
  }

const server = new ApolloServer({
    typeDefs,
    resolvers
});


server.listen(PORT).then( ({url}) => console.log( `Server is running on ${url}`) );

