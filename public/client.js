const wsock = require("websocket-stream")
const stream = wsock('ws://' + location.host)
const through = require("through2")
const html = require("yo-yo")

const root = document.body.appendChild(document.createElement("div"))
const output = []
update()

stream.pipe(through(function(buf, enc, next) {
    output.push(buf.toString())
    update()
    next()
}))

function update() {
    html.update(root, html`
        <div>
            <input id="message" type="text" />
            <button onclick=${onSubmit}>Send</button>
            <pre>${output.join(' ')}</pre>
        </div>  
    `)

    function onSubmit(event) {
        stream.write(document.getElementById("message").value + "\n")
        document.getElementById("message").value = ""
    }
}