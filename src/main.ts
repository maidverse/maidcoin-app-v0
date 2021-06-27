import { SkyRouter } from "skyrouter";
import Admin from "./view/Admin";
import Earn from "./view/Earn";
import Home from "./view/Home";
import Layout from "./view/Layout";
import Maid from "./view/Maid";
import Nurse from "./view/Nurse";
import TestLPToken from "./view/test/TestLPToken";

SkyRouter.route("**", Layout);
SkyRouter.route("", Home);
SkyRouter.route("maid", Maid);
SkyRouter.route("earn", Earn);
SkyRouter.route("nurse", Nurse);
SkyRouter.route("admin", Admin);

// test
SkyRouter.route("test-lp-token", TestLPToken);

if (sessionStorage.__spa_path) {
    SkyRouter.go(sessionStorage.__spa_path);
    sessionStorage.removeItem('__spa_path');
}