"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.static(path_1.default.resolve(__dirname, '../build')));
app.get('*', (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, '../build', 'index.html'));
});
app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
});
