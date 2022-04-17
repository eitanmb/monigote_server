"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const dotenv_1 = __importDefault(require("dotenv"));
const graphql_1 = require("./graphql");
dotenv_1.default.config();
const PORT = process.env.PORT;
if (!PORT) {
    process.exit(1);
}
const server = new apollo_server_1.ApolloServer({
    typeDefs: graphql_1.typeDefs,
    resolvers: graphql_1.resolvers
});
server.listen(PORT).then(({ url }) => console.log(`Server is running on ${url}`));
