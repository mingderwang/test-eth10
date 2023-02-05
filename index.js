const express = require('express');
const { Thing } = require("@muzamint/eth10");

const app = express();

app.get('/', (req, res) => {
  res.write(`<body>
    <script src="https://unpkg.com/mithril/mithril.js"></script>
    <script>
    var root = document.body
    m.mount(root, {
    view: function() {
        return m("h1", "Try me out")
    }
})
    </script>
</body>`);
  res.end()
});

app.listen(3000, () => {
  console.log('server started');
});
