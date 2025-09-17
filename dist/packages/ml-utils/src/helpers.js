"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeData = normalizeData;
function normalizeData(data) {
    const max = Math.max(...data);
    return data.map((v) => v / max);
}
