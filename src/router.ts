import express from "express";
import UserController from "./controllers/user";

const router = express.Router();

router.get('/register', (req, res) => UserController.register(req, res));
router.get('/login', (req, res) => UserController.login(req, res));
router.get('/getUser', (req, res) => UserController.login(req, res));

export default router;