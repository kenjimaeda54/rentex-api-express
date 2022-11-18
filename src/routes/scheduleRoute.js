import {Router} from "express";
import schedule from "../controllers/scheduleController";

const router = new Router()

router.get("/", schedule.index)
router.get("/:id", schedule.show)

export default router;
