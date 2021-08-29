import m from "mithril";
import {Socials, Me} from "./me/me.component";
import './profile.component.scss'

export const Profile: m.Component = {
    view: () => {
        return m("aside", {
            role: 'profile',
            id: 'profile'
        }, [
            m(Me),
            m(Socials)
        ])
    }
}

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias atque dignissimos dolor dolore earum ex necessitatibus officiis, qui, quo sequi sit. Aperiam harum illo nulla obcaecati officiis tempore voluptate?'


// export const Lorem: m.Component<{n: number}> = {
//     view: ({attrs: {n}} = {attrs: {n: 10}}) => m('div', {}, Array.from(Array(n)).map(_ => m('p', {}, lorem)))
// }

export const Content: m.Component = {
    view: () => {
        return m("main",
            {
                role: 'main',
                id: 'main',
                class: 'main'
            },
            'sdf'

        )
    }
}






