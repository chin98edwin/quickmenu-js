class NotRenderedError extends Error {
    // static message = "The `render()` method must be overwritten."
}
class NotReturnedError extends Error {
    // static message = "The `render()` method must return an object."
}

const quickmenu = {

    DEFAULT_PAUSE: "Press any key to continue",

    start: (component, props = {}) => {
        var { route = [] } = props
        route.push(component.name)
        props = { ...props, "route": route }
        const c = component(props)
        c.__launch__()
    },

    prompt: (text, ifYes, ifNo, defaultResponse = "-") => {
        // ...
    },

    setW: (width, align, text) => {
        // ...
    },

    getGridMenu: (options, breakBy, bullet = "", vIndex = null, useText = false) => {
        // ...
    },

    vGridTransform: (options, breakBy) => {
        // ...
    },

    Component: class {

        constructor(props) {

            // Basic properties - DO NOT tamper with these values
            this.renderCount = 0
            this.props = props
            const { route = ["Unknown"] } = this.props
            this.route = route

            // Control variables - Modify to control how the component behaves
            const {
                test = [], loop = true, skipIfInvalid = true,
                showOnceHead = false, showOnceBody = false, showOnceFoot=false
            } = this.props
            this.responseWasValid = True
            this.test = test
            this.loop = loop
            this.showOnceHead = showOnceHead
            this.showOnceBody = showOnceBody
            this.showOnceFoot = showOnceFoot
            this.skipIfInvalid = skipIfInvalid

            // Configurable styles - Customize these values to your heart's content!
            this.style = {
                "grid": "none",
                "exitText": this.route.length <= 1 ? "Exit" : "Back",
                "bullet": "<b>. ",
                "prompt": "> ",
                "pause": null
            }
            if (this.props.style) { this.style = { ...this.style, ...this.props.style } }

        }

        render() {}

        componentWillPrint(head, body, foot) {}

        componentDidCatch(error) {
            console.log("\n\nAn error has occured in the following component:\n • " + route.join(" > ") + "\n\nWrap the component with an Error Boundary to handle this error. \n\n", error, "\n")
            process.exit()
        }

        componentDidMount() {}

        componentDidLoop() {}

        componentDidReceive(response, body, injected) {
            // ...
        }

        componentWillLoop() {}

        componentWillUnmount() {}

        __stringifyBody__() {
            // ...
        }

        __launch__() {
            // ...
        }

    }

}

module.exports = quickmenu