import {Router} from "express";
import carController from "../controllers/carsController.js";

const router = new Router()

router.get("/", carController.index)

export default router;
