import Sequelize, {Model} from "sequelize";

export default class UserModel extends Model {
	static init(sequelize) {
		super.init(
			{
				userId: {
					type: Sequelize.STRING,
					validate: {
						notEmpty: {
							msg: "User id required",
						},
					}
				},
				startDate: Sequelize.STRING,
				endDate: Sequelize.STRING,
				totalValue: Sequelize.STRING,
				carId: {
					type: Sequelize.INTEGER,
					validate: {
						notEmpty: {
							msg: "CarId required",
						},
					}
				},
			},
			{
				sequelize,
				tableName: 'users',
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
