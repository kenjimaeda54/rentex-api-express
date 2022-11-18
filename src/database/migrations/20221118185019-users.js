module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.addColumn('users', 'userId', {
				type: Sequelize.STRING,
				allowNull: false,
			}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('users');

	}
};
