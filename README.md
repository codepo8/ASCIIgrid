# ASCIIgrid 

This is a class that creates a grid to plot ASCII characters onto. This can be used to solve "paint this pattern" challenges in a scalable manner.

For example, if you were to create a pattern like:

```
XXXXXXX
XX   XX
X X X X
X  X  X
X X X X
XX   XX
XXXXXXX
```

Using ASCIIgrid this `could be done thus`:

```javascript
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
```

The class exposes the following methods:

* `create(width, height, char)` - creates a grid and fills it with `char`.
* `plot(x,y,char)` - puts `char` at x and y of the grid, both starting at 0. 
* `render()` - turns the grid into a string separated by line breaks `\n`.

