import { ApolloServer } from 'apollo-server-express';
import * as Express from 'Express';
import { buildSchema, Resolver, Query } from 'type-graphql';
import 'reflect-metadata';

@Resolver()
class HelloResolver {
	@Query(() => String, { description: 'Hello world is a beautiful lorem ipsum' })
	async hello() {
		// fake async in this example
		return 'hello world';
	}
}
const main = async () => {
	const schema = await buildSchema({
		resolvers: [HelloResolver]
	});

	const apolloServer = new ApolloServer({ schema });

	const app = Express();

	apolloServer.applyMiddleware({ app });

	app.listen(4000, () => {
		console.log('Server started on http://localhost:4000/graphql');
	});
};

main();
