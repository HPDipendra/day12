import express from "express";
import UserController from "../controller/userController";


const router = express.Router();
const userController = new UserController()

router.post('/addUsers', userController.addUser)
router.get('/getOne/:id', userController.getById)
router.post('/delete/:id', userController.delete)
router.get('/getAll', userController.getAll)
router.post('/edit/:id', userController.update)





export default router;