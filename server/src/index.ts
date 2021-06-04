import "dotenv/config";
import "reflect-metadata";
import express from 'express';
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from 'type-graphql';
import { UserResolver } from "./resolver/UserResolver";
import { createConnection } from "typeorm";
import cookieParser from "cookie-parser";

(async () => {
	const app = express();
	app.use(cookieParser());
	app.get("/", (_req, res) => {
		res.send('hello');
	});

	app.post("/refresh_token", req => {
		console.log(["🚀 ~ file: index.ts ~ line 17 ~ req", req.cookies]);
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
