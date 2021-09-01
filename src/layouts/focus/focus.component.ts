import m, {_NoLifecycle, Children, Component, Vnode} from 'mithril';
// import Mithril from "mithril";
import './focus.component.scss' ;
// @ts-ignore
// import sheet from'./focus.component.css' assert {type: 'css'};
// const sheet = await import('./focus.component.scss', {
//     assert: {type: 'css'}
// })
// const sheet = await import('./focus.component.scss')
// console.log(sheet.default)
// document.adoptedStyleSheets  = [sheet]
import {MainNav} from "../../main-nav/main-nav.component";


export class FocusLayout implements Component {
    constructor(...args: any[]) {
        console.log('struct', args)
    }
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
        return m('main.layout--focus', [
            m('nav.main-nav', m(MainNav)),
            m('div.page', vnode.children),
            m('footer', 'footer')
        ]);
    }
}
