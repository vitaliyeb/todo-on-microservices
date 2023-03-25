"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (req, res) => {
    res.send('hello world');
});
app.listen(port, () => {
    console.log(`listen port: ${port}`);
});
//# sourceMappingURL=app.js.map