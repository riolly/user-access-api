"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const User_1 = require("../entity/User");
const jwt = __importStar(require("jsonwebtoken"));
const config_1 = require("../../config");
class UserController {
    static register(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            if (!email || !password) {
                return res.status(400).json({ error: 'please fill email and password correctly' });
            }
            const userRepository = typeorm_1.getRepository(User_1.User);
            try {
                yield userRepository.save({ email, password });
                return res.status(201).json({ message: 'register success' });
            }
            catch (err) {
                return res.status(500).json({ error: err.message });
            }
        });
    }
    static login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            if (!email || !password) {
                return res.status(400).json({ error: 'please fill email and password' });
            }
            const userRepository = typeorm_1.getRepository(User_1.User);
            try {
                const response = yield userRepository.findOne({ email, password });
                if (!response) {
                    return res.status(400).json({ error: 'wrong email or password' });
                }
                else {
                    const access_token = jwt.sign({ id: response.id, email: response.email }, config_1.JWT_KEY);
                    return res.status(200).json({ message: 'login success', access_token });
                }
            }
            catch (err) {
                return res.status(500).json({ error: err.message });
            }
        });
    }
    static getUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { access_token } = req.headers;
            if (!access_token) {
                return res.status(400).json({ error: "please provide a valid access_token " });
            }
            try {
                const decoded = jwt.verify(access_token, config_1.JWT_KEY);
                return res.status(200).json(decoded);
            }
            catch (err) {
                return res.status(401).json({ error: err.message });
            }
        });
    }
}
exports.default = UserController;
//# sourceMappingURL=user.js.map