import m, {_NoLifecycle, Children, Vnode} from 'mithril';
// import Mithril from "mithril";
import './focus.component.scss';

export const FocusLayout: m.Component = {
    // onbeforeremove(vnode: Mithril.VnodeDOM<{}, Mithril._NoLifecycle<this>>): Promise<any> | void {
    //     return undefined;
    // },
    // onbeforeupdate(vnode: Mithril.Vnode<{}, Mithril._NoLifecycle<this>>, old: Mithril.VnodeDOM<{}, Mithril._NoLifecycle<this>>): boolean | void {
    //     return undefined;
    // },
    // oncreate(vnode: Mithril.VnodeDOM<{}, Mithril._NoLifecycle<this>>): any {
    // },
    // oninit(vnode: Mithril.Vnode<{}, Mithril._NoLifecycle<this>>): any {
    // },
    // onremove(vnode: Mithril.VnodeDOM<{}, Mithril._NoLifecycle<this>>): any {
    // },
    // onupdate(vnode: Mithril.VnodeDOM<{}, Mithril._NoLifecycle<this>>): any {
    // },
    view(vnode: Vnode<{}, _NoLifecycle<any>>): Children | void | null {
        return m('main', 'dddd');
    }
}
