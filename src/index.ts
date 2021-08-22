import "./styles.scss";

import m from "mithril";
import {Splash} from "./splash/splash.component";
import {Profile, Content, Lorem} from "./profile/profile.component";
import Mithril from "mithril";

const root = document.body;

export const Main: m.Component = {
    oncreate: (vnode: Mithril.VnodeDOM<{}, Mithril._NoLifecycle<this>>): any => {
        console.log(vnode)
    },
    oninit: (vnode: Mithril.Vnode<{}, Mithril._NoLifecycle<this>>): any => {
        // console.log(document.querySelector('#main'), 'cv', {
        //     '/main/cv': Lorem
        // });
    },
    view: () => {
        return m.render(root,
            [
                m(Profile),
                m(Content)
            ]
        );
    },
};

m.route(root, "/splash", {
    "/splash": Splash,
    "/main": Main,
});

