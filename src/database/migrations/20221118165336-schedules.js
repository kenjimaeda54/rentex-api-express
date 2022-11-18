module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('schedules', {
				id: {
					type: Sequelize.INTEGER,
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
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
				unavailableDates: {
					type: Sequelize.JSON
				},
			}
		);

	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('schedules');

	}
};
