import { SkyRouter } from "skyrouter";
import CloneNurseContract from "./contracts/CloneNurseContract";
import Earn from "./view/Earn";
import Home from "./view/Home";
import Layout from "./view/Layout";
import Maid from "./view/Maid";
import Nurse from "./view/Nurse";

SkyRouter.route("**", Layout);
SkyRouter.route("", Home);
SkyRouter.route("maid", Maid);
SkyRouter.route("earn", Earn);
SkyRouter.route("nurse", Nurse);

if (sessionStorage.__spa_path) {
    SkyRouter.go(sessionStorage.__spa_path);
    sessionStorage.removeItem('__spa_path');
}

CloneNurseContract