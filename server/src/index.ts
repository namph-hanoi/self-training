import "reflect-metadata";
// import {createConnection} from "typeorm";
// import {User} from "./entity/User";
import express from 'express';
import { ApolloServer } from "apollo-server-express";


(() => {
	const app = express();
	app.get("/", (_req, res) => {
		res.send('hello');
	});

	// APOLLO SERVER setup
	const apolloServer = new ApolloServer({
		typeDefs: `
			type Query {
				hello: String!
			}
		`,
		resolvers: {
			Query: {
				hello: () => 'Hello bro!'
			}
		}
	});
	apolloServer.applyMiddleware({ app })
	// \\ APOLLO SERVER setup

	app.listen(4000, () => {
		console.log("Express listen");
	});
})();
