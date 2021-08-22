import m from "mithril";
import "./splash.component.scss"

let count = 0; // added a variable

export const Splash: m.Component = {
    view: function () {
        return m("main", {
            class: 'main'
        }, [
            m(
                "h1",
                {
                    class: "title",
                },
                "My first app"
            ),
            m(
                "button",
                {
                    onclick: function () {
                        count++;
                    },
                },
                count + " clicks"
            ),
        m("a", {href: "#!/main"}, "Enter!")
        ]);

    },
};

