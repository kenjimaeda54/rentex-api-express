import Sequelize from "sequelize";
import databaseConfig from "../config/database";
import CarModel from "../models/CarModel";
import ScheduleModel from "../models/Schedule";
import UserModel from "../models/UserModel";

const models = [CarModel, ScheduleModel, UserModel];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
