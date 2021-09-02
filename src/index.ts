import "./styles.scss";

import m, {_NoLifecycle, Vnode, VnodeDOM} from "mithril";
import {Splash} from "./splash/splash.component";
import {Profile, Content,

    // Lorem
} from "./me/profile/profile.component";
// import Mithril from "mithril";
import {EmptyLayout} from "./layouts/empty/empty.component";
import {FocusLayout} from "./layouts/focus/focus.component";
import {Me} from "./me/me.component";

const root = document.body;

export class Main implements m.Component  {
    public oncreate(vnode: VnodeDOM<{}, _NoLifecycle<this>>): any  {
        console.log(vnode)
    };
    public oninit (vnode: Vnode<{}, _NoLifecycle<this>>): any  {
        // console.log(document.querySelector('#main'), 'cv', {
        //     '/main/cv': Lorem
        // });
    };
    public view() {
        return m.render(root,
            [
                m(Profile),
                m(Content)
            ]
        );
    };
}

const Layout: m.Component = {
    view: (vnode) => m("main.layout", [
        m("nav.menu", [
            m(m.route.Link, {href: "/main"}, "main"),
            m(m.route.Link, {href: "/test"}, "test"),
            m(m.route.Link, {href: "/test/pp"}, "test pp"),
        ]),
        m("section", JSON.stringify(vnode.attrs)),
        m("section", vnode.children)
    ])
}

// class List implements m.Component {
//
//     public view(vnode) {
//         m('div.test', JSON.stringify(vnode.attrs))
//     }
//
// }


m.route(root, "/", {
    "/": {
        render: (vnode) => m(EmptyLayout, m(Splash, vnode.attrs))
    },
    "/me": {
        render: (vnode) => m(FocusLayout, m(Me))
    },
    "/cv": {
        render: (vnode) => m(FocusLayout, m('div', '/cv'))
    },
    "/io": {
        render: (vnode) => m(FocusLayout, m('div', '/io'))
    },
    // "/test": {
    //     render: function () {
    //         return m(Layout, m(List, {}))
    //     }
    // },
    // "/test/:id": {
    //     render: function (vnode) {
    //         return m(Layout, {active: 1}, m(List, vnode.attrs))
    //     }
    // },
});

