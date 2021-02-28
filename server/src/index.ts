import "dotenv/config";
import "reflect-metadata";
import express from 'express';
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from 'type-graphql';
import { UserResolver } from "./resolver/UserResolver";
import { createConnection } from "typeorm";


(async () => {
	const app = express();
	app.get("/", (_req, res) => {
		res.send('hello');
	});

	await createConnection();

	// APOLLO SERVER setup
	const apolloServer = new ApolloServer({
		schema: await buildSchema({
			resolvers: [UserResolver]
		}),
		context: ({ req, res }) => ({ req, res })
	});
	apolloServer.applyMiddleware({ app })
	// \\ APOLLO SERVER setup

	app.listen(4000, () => {
		console.log("Express listen");
	});
})();
