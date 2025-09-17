"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_js_1 = require("../packages/ml-utils/src/helpers.js");
const raw = [10, 20, 30, 40];
const normalized = (0, helpers_js_1.normalizeData)(raw);
console.log("Raw:", raw);
console.log("Normalized:", normalized);
