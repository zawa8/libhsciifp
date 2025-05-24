"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hsciifontpicker = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var fgioptions_soft_json_1 = __importDefault(require("./fgioptions_soft.json"));
var Hsciifontpicker = function () {
    var handle_fitem_change = function (event) {
        if (event.target.value) {
            document.body.style.fontFamily = event.target.value;
        }
    };
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)("select", { onChange: handle_fitem_change, defaultValue: '', children: [(0, jsx_runtime_1.jsx)("option", { value: "", disabled: true, children: "hscii_font select please" }), fgioptions_soft_json_1.default.map(function (option) { return ((0, jsx_runtime_1.jsxs)("option", { value: option.walue, children: [" ", option.label, " "] }, option.walue)); })] }) }));
};
exports.Hsciifontpicker = Hsciifontpicker;
