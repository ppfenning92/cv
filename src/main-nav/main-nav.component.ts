import m, {_NoLifecycle, Children, Component, Vnode, VnodeDOM} from 'mithril';
import './main-nav.component.scss';

interface INavItem  {
    text: string;
    url: string;
    idx?: number;
}
const nav: Array<INavItem> = [
    {
        text: 'Me',
        url: '/me'
    },
    {
        text: 'Cv',
        url: '/cv'
    },
    {
        text: 'Io',
        url: '/io'
    }
];

class NavItem implements Component<INavItem> {
    public view(vnode: Vnode<INavItem , _NoLifecycle<this>>): Children | void | null {
        console.log(vnode)

        return m('li.nav__list__item', [
            m(m.route.Link,{
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
            nav.map((nav: INavItem, idx: number) => m(NavItem, {...nav, idx}))
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
