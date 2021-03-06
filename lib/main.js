"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skyrouter_1 = require("skyrouter");
const Admin_1 = __importDefault(require("./view/Admin"));
const Earn_1 = __importDefault(require("./view/Earn"));
const Home_1 = __importDefault(require("./view/Home"));
const Layout_1 = __importDefault(require("./view/Layout"));
const Maid_1 = __importDefault(require("./view/Maid"));
const Nurse_1 = __importDefault(require("./view/Nurse"));
const TestLPToken_1 = __importDefault(require("./view/test/TestLPToken"));
skyrouter_1.SkyRouter.route("**", Layout_1.default);
skyrouter_1.SkyRouter.route("", Home_1.default);
skyrouter_1.SkyRouter.route("maid", Maid_1.default);
skyrouter_1.SkyRouter.route("earn", Earn_1.default);
skyrouter_1.SkyRouter.route("nurse", Nurse_1.default);
skyrouter_1.SkyRouter.route("admin", Admin_1.default);
skyrouter_1.SkyRouter.route("test-lp-token", TestLPToken_1.default);
if (sessionStorage.__spa_path) {
    skyrouter_1.SkyRouter.go(sessionStorage.__spa_path);
    sessionStorage.removeItem('__spa_path');
}
//# sourceMappingURL=main.js.map