import 'module-alias/register';
import { ApolloServer } from 'apollo-server';
import resolvers from 'src/graphql/resolvers';
import typeDefs from 'src/graphql/type-defs';
import HttpManager from 'src/services/HttpManager';
import Logger from 'src/core/logger/Logger';
import Settings from 'src/core/config/Settings';
import HttpConnector from 'src/data/connector/HttpConnector';

const settings = new Settings();
const logger = new Logger(settings);
const httpConnector = new HttpConnector(logger, settings);
const httpManager = new HttpManager(logger, httpConnector);

const server = new ApolloServer({
  resolvers,
  typeDefs,
  context: {
    httpManager,
  },
});

server.listen().then(({ url }) => logger.info(`Server ready at ${url}. `));
