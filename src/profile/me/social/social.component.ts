import m from 'mithril'
import './social.component.scss'

export interface ISocial {
    name: string;
    iconPath: string;
    link: string;
}

export const Social: m.Component<ISocial> = {
    view: ({attrs: {name, iconPath, link}}) => {
        return m(
            'a',
            {
                class: 'social',
                href: link,
                target: '_blank',
            },
            [
                m('img', {
                    class: 'social__icon',
                    src: iconPath,
                    alt: name
                }),
                m('span', {
                    class: 'social__text',
                }, link)
            ])
    }
}
