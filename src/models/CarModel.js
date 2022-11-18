import Sequelize, {Model} from "sequelize";

export default class CarModel extends Model {
	static init(sequelize) {
		super.init(
			{
				brand: Sequelize.STRING,
				name: Sequelize.STRING,
				about: Sequelize.STRING,
				rent: Sequelize.JSON,
				fuelType: Sequelize.STRING,
				thumbNail: Sequelize.STRING,
				accessories: Sequelize.JSON,
				photos: Sequelize.JSON,
			},
			{
				sequelize,
				tableName: 'cars',
				createdAt: false,
				updatedAt: false,
			}
		);
		//estou adicionado um hooks para fazer hash da senha antes de salvar no banco
		return this;
	}
}
