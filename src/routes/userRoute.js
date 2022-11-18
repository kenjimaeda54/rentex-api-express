import {Router} from "express";
import userController from "../controllers/userController";

const router = new Router()

router.post("/", userController.store)

export default router;
