"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
const router_1 = __importDefault(require("./router"));
const config_1 = require("../config");
const User_1 = require("./entity/User");
const main = () => __awaiter(this, void 0, void 0, function* () {
    yield typeorm_1.createConnection(Object.assign({}, config_1.ormConfig, { entities: [User_1.User], synchronize: true, logging: false }));
    const app = express_1.default();
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: false }));
    app.use(router_1.default);
    app.listen(4000, () => console.log("App is running at localhost:4000"));
});
main().catch(err => console.error(err));
//# sourceMappingURL=app.js.map