"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("./controllers/user"));
const router = express_1.default.Router();
router.post('/register', (req, res) => user_1.default.register(req, res));
router.post('/login', (req, res) => user_1.default.login(req, res));
router.get('/getUser', (req, res) => user_1.default.getUser(req, res));
exports.default = router;
//# sourceMappingURL=router.js.map