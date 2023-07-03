import  { Router } from "express";
import UserRouter from "./modules/user/user.router";

const router = Router()

const userRouter = new UserRouter();

router.use('/', userRouter.router);

export default router;