import "reflect-metadata";
// import {createConnection} from "typeorm";
// import {User} from "./entity/User";
import express from 'express';


(() => {
	const app = express();
	app.get("/", (_req, res) => {
		res.send('hello');
	});

	app.listen(4000, () => {
		console.log("Express listen");
	});
})();
