import { ASCIIgrid } from './index.js';

let c = new ASCIIgrid();
let w = 7;
let h = 7;
let char = 'X';

c.create(w, h, ' ');

for(let i = 0; i < h; i++) {
    c.plot(i, 0, char); // top line
    c.plot((w - 1), i, char); // right line
    c.plot(i, (h - 1), char); // bottom line
    c.plot(0, i, char); // left line
    c.plot(i, i, char); // downward left to right
    c.plot(i, (h - 1) - i, char); // downward right to left
}
console.log(c.render());