import m from "mithril";
import "./splash.component.scss";



export const Splash: m.Component = {
    view: function () {
        return m("div",{
            class: 'splash',
        }, [
            m(
                "h1",
                {
                    class: "title",
                },
                "Patrick"
            ),m(
                "h3",
                {
                    class: "subtitle",
                },
                "Lorem ipsum * 3"
            ),
            m("a", {
                id: 'enter',
                class: 'cta cta--splash',
                role: 'button',
                href: "#!/me"
            }, 'Enter!'),
        ]);

    },
};

