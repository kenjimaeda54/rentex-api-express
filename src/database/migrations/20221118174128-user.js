module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('users', {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			userId: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			carId: {
				type: Sequelize.INTEGER,
				allowNull: true,
				onUpdate: "CASCADE",
				references: {
					model: "cars",
					key: "id",
				},
			},
			startDate: {
				type: Sequelize.STRING
			},
			endDate: {
				type: Sequelize.STRING
			},
			totalValue: {
				type: Sequelize.STRING
			}
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('users');

	}
};
