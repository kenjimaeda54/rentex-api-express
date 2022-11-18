import Sequelize, {Model} from "sequelize";

export default class ScheduleModel extends Model {
	static init(sequelize) {
		super.init(
			{
				unavailableDates: Sequelize.JSON,
				carId: Sequelize.INTEGER
			},
			{
				sequelize,
				tableName: 'schedules',
				createdAt: false,
				updatedAt: false,
			},
		);
		//estou adicionado um hooks para fazer hash da senha antes de salvar no banco
		return this;
	}

	static associate(models) {
		this.belongsTo(models.CarModel, {foreignKey: "carId"})
	}

}
