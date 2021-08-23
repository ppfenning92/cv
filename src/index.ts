import "./styles.scss";

import m from "mithril";
import {Splash} from "./splash/splash.component";
import {Profile, Content, Lorem} from "./profile/profile.component";
import Mithril from "mithril";
import {EmptyLayout} from "./layouts/empty/empty.component";
import {FocusLayout} from "./layouts/focus/focus.component";

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

const Layout: m.Component = {
    view: (vnode) =>m("main.layout", [
        m("nav.menu", [
            m(m.route.Link, {href: "/main"}, "main"),
            m(m.route.Link, {href: "/test"}, "test"),
            m(m.route.Link, {href: "/test/pp"}, "test pp"),
        ]),
        m("section", JSON.stringify(vnode.attrs)),
        m("section", vnode.children)
    ])
}

const List: m.Component = {
    oncreate: (vnode: Mithril.VnodeDOM<{}, Mithril._NoLifecycle<this>>): any => {
        console.log(vnode)
    },
    oninit: (vnode: Mithril.Vnode<{}, Mithril._NoLifecycle<this>>): any => {
        console.warn(vnode)

    },
    view: (vnode) => m('div.test', JSON.stringify(vnode.attrs))

}


m.route(root, "/a", {
    "/a": {
        render: (vnode) => m(EmptyLayout, m(Splash, vnode.attrs))
    },
    "/me": {
        render: (vnode) => m(FocusLayout, m('div.test'))
    },
    "/test": {
        render: function() {
            return m(Layout, m(List, {}))
        }
    },
    "/test/:id": {
        render: function(vnode) {
            return m(Layout, {active: 1}, m(List, vnode.attrs))
        }
    },
});

