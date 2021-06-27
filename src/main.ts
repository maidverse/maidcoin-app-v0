import { SkyRouter } from "skyrouter";
import Layout from "./view/Layout";
import TestLPToken from "./view/test/TestLPToken";

SkyRouter.route("**", Layout);
SkyRouter.route("test-lp-token", TestLPToken);

if (sessionStorage.__spa_path) {
    SkyRouter.go(sessionStorage.__spa_path);
    sessionStorage.removeItem('__spa_path');
}