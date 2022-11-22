# Rentex api
Api para consultar carros e suas respectivas datas disponíveis. Possível também agendar carros e consultar os carros

## Feature
- Implementação foi realizada com ORM sequelize e banco de dados maria db
- Primeiramente precisa iniciar a migration com cli do sequelize, comando e npx sequelize migration:create --name=nome da migration
- Quem ficara responsável por indicar onde serão criado e como sera criado as migrations e o arquivo .sequelizerc
- Apos as criations criadas precisa criar as propriedades para suas colunas do banco
- Após finalizar rodar o comando npx sequelize db:migrate
- Para criar arrays e objetos usei a propriedade json

```javascript
//migrations
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

//models
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

//Controllers
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

```


## 
- Arquitetura usada foi o famosso MVC sem a cadama view
- Por padrão de mercado os controllers tem seus métodos bem definidos, abaixo o exemplo
- Abaixo também possui uma solução para os cors

```javascript
/*
   padrao do mercado dos metodos do controller
   index -> lista todos os usuarios -> Get
   store/create -> cria um novo usuario -> Post
   delete -> apaga um usuario -> Delete
   show -> mostra um usuario -> GET
   update -> atualiza um usuario -> PATH ou PUT
*/

//cors
middleware() {
		this.app.use(cors('*'))
}



```

##
- O arquivo .sequelizerc sera importante neste arquivo que determinamos onde estão nossas configurações



```javascript
const { resolve } = require("path");


module.exports = {
  config: resolve(__dirname,"src","config", "database.js"),
  "models-path": resolve(__dirname, "src", "models"),
  "migrations-path": resolve(__dirname, "src", "database", "migrations"),
  "seeders-path": resolve(__dirname, "src", "database", "seeds"),
};



```

##


## Como iniciar o projeto 

- Clona projeto
- Navega até o projeto, sistemas unix  seria o comando cd rentex-api-express 
- Instala as dependências npm install ou yarn install
- Inicia o projeto npm run dev
- Banco esta usando servidor local, precisa configurar seu banco 

## Rotas disponíveis
- /cars
- /schedules
- /schedules/id do squeduels
- /users/id do usuario







