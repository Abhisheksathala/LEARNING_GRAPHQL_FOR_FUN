import dotenv from 'dotenv';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { schema } from '@/graphql/schema/schema';
import conectDB from './database/database';
import { getUsers, getUserById } from './controllers/user';
dotenv.config({ path: './.env' });
export const envMode = process.env.NODE_ENV?.trim() || 'DEVELOPMENT';
const port = Number(process.env.PORT) || 3000;
const server = new ApolloServer({
    typeDefs: schema,
    resolvers: {
        Query: {
            hello: () => 'hello world1',
            hello2: () => 'hello world2',
            users: getUsers,
            user: (_, { id }) => getUserById(id),
        },
    },
});
startStandaloneServer(server, {
    listen: {
        port,
    },
})
    .then(() => {
    console.log('server is working on port:' + port + ' in ' + envMode + ' mode.');
})
    .catch((error) => {
    console.log(error);
    process.exit(1);
});
conectDB();
