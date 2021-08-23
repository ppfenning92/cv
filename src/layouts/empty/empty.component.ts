import m from 'mithril'
// import './empty.component.scss'
import Mithril from "mithril";

export const EmptyLayout: m.Component = {
    onbeforeremove(vnode: Mithril.VnodeDOM<{}, Mithril._NoLifecycle<this>>): Promise<any> | void {
        return undefined;
    },
    onbeforeupdate(vnode: Mithril.Vnode<{}, Mithril._NoLifecycle<this>>, old: Mithril.VnodeDOM<{}, Mithril._NoLifecycle<this>>): boolean | void {
        return undefined;
    },
    oncreate(vnode: Mithril.VnodeDOM<{}, Mithril._NoLifecycle<this>>): any {
    },
    oninit(vnode: Mithril.Vnode<{}, Mithril._NoLifecycle<this>>): any {
    },
    onremove(vnode: Mithril.VnodeDOM<{}, Mithril._NoLifecycle<this>>): any {
        console.log({vnode})
    },
    onupdate(vnode: Mithril.VnodeDOM<{}, Mithril._NoLifecycle<this>>): any {
    },
    view(vnode: Mithril.Vnode<{}, Mithril._NoLifecycle<this>>): Mithril.Children | void | null {
        return m('main', vnode.children);
    }
}
