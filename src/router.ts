import express from "express";
import UserController from "./controllers/user";

const router = express.Router();

router.post('/register', (req, res) => UserController.register(req, res));
router.post('/login', (req, res) => UserController.login(req, res));
router.get('/getUser', (req, res) => UserController.getUser(req, res));

export default router;