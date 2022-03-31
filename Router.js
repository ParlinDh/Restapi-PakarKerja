'use strict'

export function App() {
    var Jsonku = require('./Controller');

    app.route('/')
        .get(Jsonku.index);
}