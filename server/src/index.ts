import { ApolloServer } from 'apollo-server-express';
import connectRedis from 'connect-redis';
import cors from 'cors';
import Express from 'Express';
import session from 'express-session';
import 'reflect-metadata';
import { buildSchema, formatArgumentValidationError } from 'type-graphql';
import { createConnection } from 'typeorm';
import { LoginResolver } from './modules/user/Login';
import { MeResolver } from './modules/user/Me';
import { RegisterResolver } from './modules/user/Register';
import { redis } from './redis';

const main = async () => {
    await createConnection();

    const schema = await buildSchema({
        resolvers: [MeResolver, RegisterResolver, LoginResolver]
    });

    const apolloServer = new ApolloServer({
        schema,
        formatError: formatArgumentValidationError,
        context: ({ req }: any) => ({ req })
    });

    const app = Express();
    const RedisStore = connectRedis(session);

    app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
    app.use(
        session({
            store: new RedisStore({
                client: redis as any
            }),
            name: 'qid',
            secret: 'afdhjjfeakckaneienfiea',
            resave: false,
            saveUninitialized: false,
            cookie: {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                maxAge: 1000 * 60 * 60 * 24 * 7 * 365 // 7 years
            }
        })
    );

    apolloServer.applyMiddleware({ app });

    app.listen(4000, () => {
        console.log('Server started on http://localhost:4000/graphql');
    });
};

main();
