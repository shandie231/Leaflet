"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const L = __importStar(require("leaflet"));
const react_leaflet_1 = require("react-leaflet");
const GeomanControl_1 = require("./GeomanControl");
require("./style.css");
function App() {
    const washingtonDC = L.latLng(38.9072, -77.0369);
    const mapStyle = { height: '100vh', width: '100%', padding: 0 };
    return (React.createElement(React.Fragment, null,
        React.createElement(react_leaflet_1.MapContainer, { center: washingtonDC, zoom: 8, zoomControl: false, style: mapStyle, whenReady: () => { } },
            React.createElement(react_leaflet_1.TileLayer, { attribution: '\u00A9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors', url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png" }),
            React.createElement(GeomanControl_1.GeomanControl, { position: "topright", drawCircle: false, oneBlock: true }))));
}
exports.default = App;
