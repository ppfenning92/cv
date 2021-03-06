import m from "mithril";
import type {ISocial} from "./social/social.component";
import {Social} from "./social/social.component";
import './me.component.scss'

export const Me: m.Component = {
    view: () => {
        return m('header',
            {
                class: 'me',

            }, [
                m('h1', {
                        role: 'title',
                        id: 'name'
                    },
                    'Patrick Pfenning'
                ),
                m('h2', {
                        role: 'subtitle',
                        id: 'currentJob'
                    },
                    'Senior Web Developer'
                ),
                m('img', {
                    id: 'profilePicture',
                    width: 225,
                    height: 225,
                    class: 'image skeleton',
                    src: 'https://avatars.dicebear.com/api/jdenticon/pp.svg',
                    onload: (event: Event & { target: Element }) => {
                        event.target.classList.remove('skeleton')
                    }
                })
            ])
    }
}

const socials: ISocial[] = [
    {
        name: 'Instagram',
        iconPath: 'assets/img/ig.png',
        link: 'https://www.instagram.com/ppfenning92'
    }, {
        name: 'LinkedIn',
        iconPath: '/assets/img/li.png',
        link: 'https://www.linkedin.com/in/patrickpfenning/'
    }, {
        name: 'codepen.io',
        iconPath: '/assets/img/cp-black.png',
        link: 'https://codepen.io/patrickpfenning'
    }, {
        name: 'GitHub',
        iconPath: '/assets/img/gh.png',
        link: 'https://github.com/ppfenning92'
    }, {
        name: 'twitter',
        iconPath: '/assets/img/cp-black.png',
        link: 'https://twitter.com/PPfenning92'
    }
]
export const Socials: m.Component = {
    view: () => {
        return m('section', {
                class: 'socials'
            }, socials.map((social) => m(Social, social))
        )
    }
}
