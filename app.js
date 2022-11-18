import express, {Request, Response} from "express";
import "express-async-errors";
import "./src/database";
import carRoute from "./src/routes/carRoute";
import dotenv from 'dotenv'
import scheduleRoute from "./src/routes/scheduleRoute";
import userRoute from "./src/routes/userRoute";

dotenv.config();


/*
   padrao do mercado dos metodos do controller
   index -> lista todos os usuarios -> Get
   store/create -> cria um novo usuario -> Post
   delete -> apaga um usuario -> Delete
   show -> mostra um usuario -> GET
   update -> atualiza um usuario -> PATH ou PUT
*/

class App {
	constructor() {
		this.app = express()
		this.routes();
	}

	routes() {
		this.app.use(express.json());
		this.app.use(express.urlencoded({extended: true}));
		this.app.use("/cars", carRoute)
		this.app.use("/schedules", scheduleRoute)
		this.app.use("/users", userRoute)
	}

}

export default new App().app;
