import { normalizeData } from "../packages/ml-utils/src/helpers.js";

const raw = [10, 20, 30, 40];
const normalized = normalizeData(raw);

console.log("Raw:", raw);
console.log("Normalized:", normalized);
