"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../../src");
const ins = process.env.INS;
const data = Buffer.from(ins, 'hex');
const decoded = src_1.MangoInstructionLayout.decode(data, 0);
console.log(decoded);
for (let k1 in decoded) {
    for (let k2 in decoded[k1]) {
        console.log(k2, decoded[k1][k2].toString());
    }
}
//# sourceMappingURL=decode.js.map