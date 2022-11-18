module.exports = {
	async up(queryInterface, Sequelize) {
		return await queryInterface.createTable('cars',
			{
				id: {
					type: Sequelize.INTEGER,
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
				},
				brand: {
					type: Sequelize.STRING
				},
				name: {
					type: Sequelize.STRING
				},
				about: {
					type: Sequelize.STRING
				},
				rent: {
					type: Sequelize.JSON
				},
				fuelType: {
					type: Sequelize.STRING
				},
				thumbNail: {
					type: Sequelize.STRING
				},
				accessories: {
					type: Sequelize.JSON
				},
				photos: {
					type: Sequelize.JSON
				},
			});
	},

	async down(queryInterface, Sequelize) {
		return await queryInterface.dropTable('cars');
	}
};
