"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skyrouter_1 = require("skyrouter");
const Earn_1 = __importDefault(require("./view/Earn"));
const Home_1 = __importDefault(require("./view/Home"));
const Layout_1 = __importDefault(require("./view/Layout"));
const Maid_1 = __importDefault(require("./view/Maid"));
const Nurse_1 = __importDefault(require("./view/Nurse"));
skyrouter_1.SkyRouter.route("**", Layout_1.default);
skyrouter_1.SkyRouter.route("", Home_1.default);
skyrouter_1.SkyRouter.route("maid", Maid_1.default);
skyrouter_1.SkyRouter.route("earn", Earn_1.default);
skyrouter_1.SkyRouter.route("nurse", Nurse_1.default);
//# sourceMappingURL=main.js.map