import m, {_NoLifecycle, Children, Component, Vnode, VnodeDOM} from 'mithril'
import './empty.component.scss'

export class EmptyLayout implements Component {
    public onbeforeremove(vnode: VnodeDOM<{}, _NoLifecycle<this>>): Promise<any> | void {
        return undefined;
    };
    public onbeforeupdate(vnode: Vnode<{}, _NoLifecycle<this>>, old: VnodeDOM<{}, _NoLifecycle<this>>): boolean | void {
        return undefined;
    };
    public oncreate(vnode: VnodeDOM<{}, _NoLifecycle<this>>): any {
    };
    public oninit(vnode: Vnode<{}, _NoLifecycle<this>>): any {
    };
    public onremove(vnode: VnodeDOM<{}, _NoLifecycle<this>>): any {
        console.log({vnode})
    };
    public onupdate(vnode: VnodeDOM<{}, _NoLifecycle<this>>): any {
    };
    public view(vnode: Vnode<{}, _NoLifecycle<this>>): Children | void | null {
        return m('main.layout--empty', vnode.children);
    }
}
