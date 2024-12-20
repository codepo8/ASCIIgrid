class ASCIIgrid {
    grid = [];
    create = (width, height, char) => {
        for (let i = 0; i < height; i++) {
            this.grid.push(Array(width).fill(char));
        }
    };
    plot = (x, y, char) => {
        if (y >= 0 && y < this.grid.length && 
            x >= 0 && x < this.grid[y].length) {
            this.grid[y][x] = char;
        }
    };
    render = () => {
        this.grid = this.grid.map(row => row.join(''));
        return this.grid.join('\n');
    };
}

export { ASCIIgrid };