import {ApolloServer} from 'apollo-server';
import {resolvers} from './resolvers';
import {typeDefs} from './type-defs';

const port = process.env.port ?? 9090;
const server = new ApolloServer({resolvers, typeDefs});

server.listen({port}, () => {
	console.log(`Server runs at http://localhost:${port}`);
}).catch(console.error);
