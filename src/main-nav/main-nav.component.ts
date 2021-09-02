import m, {_NoLifecycle, Children, Component, Vnode, VnodeDOM} from 'mithril';
import './main-nav.component.scss';

interface INavItem {
    text: string;
    url: string;
    idx?: number;
}

const nav: Array<INavItem> = [
    {
        text: 'Me',
        url: '/me',
    },
    {
        text: 'Cv',
        url: '/cv',
    },
    {
        text: 'Io',
        url: '/io',
    }
];

class NavItem implements Component<INavItem> {
    private _classes: Set<string> = new Set(['nav__list__item'])

    public get classes(): string {
        return Array.from(this._classes).join(' ')
    }

    private toggleActiveState(url: string): void {
        if (m.route.get() === url) {
            this._classes.add('nav__list__item--active')
        } else {
            this._classes.delete('nav__list__item--active')
        }
    }

    // Lifecycle
    public oninit(vnode: Vnode<INavItem, _NoLifecycle<this>>): any {
        this.toggleActiveState(vnode.attrs.url);
    }

    public onupdate(vnode: VnodeDOM<INavItem, _NoLifecycle<this>>): any {
        this.toggleActiveState(vnode.attrs.url)
    }

    public view(vnode: Vnode<INavItem, _NoLifecycle<this>>): Children | void | null {
        return m('li', {
            class: this.classes
        }, [
            m(m.route.Link, {
                class: 'nav__list__item__link',
                href: vnode.attrs.url,
                tabindex: (vnode.attrs.idx ?? -1) + 1
            }, vnode.attrs.text)
        ]);
    }
}

export class MainNav implements Component {
    public view(vnode: Vnode<{}, _NoLifecycle<this>>): Children | void | null {
        return m('ul.nav__list',
            nav.map((nav: INavItem, idx: number) => m(new NavItem(), {...nav, idx}))
            // [
            // m(NavItem, )
            // m('li.nav__list__item', [
            //     m('a.nav__list__item__link', '111111')
            // ]),
            // m('li.nav__list__item', [
            //     m('a.nav__list__item__link', '22222')
            // ]),
            // m('li.nav__list__item', [
            //     m('a.nav__list__item__link', '3c3c3c3')
            // ]),
            // m('li.nav__list__item', [
            //     m('a.nav__list__item__link', 'fourfour')
            // ])
            // ]
        );
    }
}
