import CarModel from "../models/CarModel.js";

class CarController {

	//isso e um metodo , comum para criar conhecido como store
	async index(req, res) {
		try {
			const cars = await CarModel.findAll();
			res.send(cars);
		} catch (e) {
			console.log(e)
			res.send("error")
		}

	}
}

export default new CarController();
