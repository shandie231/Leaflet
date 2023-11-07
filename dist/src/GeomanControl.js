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
exports.GeomanControl = void 0;
const core_1 = require("@react-leaflet/core");
const L = __importStar(require("leaflet"));
require("@geoman-io/leaflet-geoman-free");
require("@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css");
const Geoman = L.Control.extend({
    initialize(options) {
        L.setOptions(this, options);
    },
    addTo(map) {
        if (!map.pm)
            return;
        map.pm.addControls(Object.assign({}, this.options));
    },
});
const createGeomanInstance = (props) => {
    return new Geoman(props);
};
exports.GeomanControl = (0, core_1.createControlComponent)(createGeomanInstance);
