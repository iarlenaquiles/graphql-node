import { GraphQLServer } from 'graphql-yoga';
import path from 'path';
import resolvers from './app/resolvers/resolvers';
import './database';

const server = new GraphQLServer({
  typeDefs: path.resolve(__dirname, '.', 'app', 'schemas', 'schema.graphql'),
  resolvers,
});

server.start();
