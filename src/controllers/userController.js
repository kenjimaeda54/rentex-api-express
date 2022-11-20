import UserModel from "../models/UserModel";
import CarModel from "../models/CarModel";
import {database} from "../config/database";


class UserController {


	async show(req, res) {
		try {
			const {id} = req.params;
			let collection = [];
			const user = await UserModel.findAll({where: {userId: id}});
			const cars = await CarModel.findAll()
			user.forEach(user => {
				const car = cars.filter(car => car.dataValues.id === user.dataValues.carId);
				const newValue = {
					user: user,
					cars: [...car],
				}
				collection.push(newValue)
			})
			res.send(collection);
		} catch (e) {
			res.send("error")

		}
	}

	async store(req, res) {
		try {
			const getAllSchedules = await UserModel.findAll()

			if (getAllSchedules.length > 0) {
				const haveSchedules = getAllSchedules.filter(it => it.dataValues.userId === req.body.userId)
				const haveScheduleCar = haveSchedules.find(it => it.dataValues.carId === req.body.carId);

				if (haveScheduleCar) {
					return res.status(400).json("Don't is possible schedule same car")
				} else {
					await UserModel.create(req.body);
					//TODO: - Fazer uma verificacao para limpar as datas selecionadas
					// const getDateAvailable = await ScheduleModel.findOne({where: {carId: req.body.carId}});
					return res.send("Your appointment was made successfully")
				}

			} else {
				await UserModel.create(req.body);
				return res.send("Your appointment was made successfully")
			}

		} catch (e) {
			console.log(e)
			res.send("error")
		}

	}
}

export default new UserController();
