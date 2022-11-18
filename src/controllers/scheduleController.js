import ScheduleModel from "../models/Schedule";

class ScheduleController {

	//isso e um metodo , comum para criar conhecido como store
	async index(req, res) {
		try {
			const schedules = await ScheduleModel.findAll();
			res.send(schedules);
		} catch (e) {
			console.log(e)
			res.send("error")
		}

	}

	async show(req, res) {
		try {
			const {id} = req.params;
			const schedules = await ScheduleModel.findOne({where: {carId: id}});
			res.send(schedules);
		} catch (e) {
			console.log(e)
			res.send("error")

		}
	}
}

export default new ScheduleController();
