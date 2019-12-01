"use strict";
class Grid {
    constructor(rows, cols) {
        this._rows = rows;
        this._cols = cols;
        this._cell = new Array(rows * cols);
        for (let i = 0; i < this._cell.length; i++)
            this._cell[i] = new Cell();
    }
    get rows() {
        return this._rows;
    }
    get cols() {
        return this._cols;
    }
    /**
     * Copy a grid or a part of it that fits.
     * @param clone the grid that will be copied
     */
    copy(clone) {
        for (let y = 0; y < this._rows || y < clone._rows; y++)
            for (let x = 0; x < this._cols || x < clone._cols; x++)
                this._cell[this.index(x, y)] = clone.getCell(x, y);
    }
    get length() {
        return this._cell.length;
    }
    get buffer() {
        return this._cell;
    }
    /**
     * Transform x and y values into an index based on this grid
     */
    index(x, y) {
        if (!this.valid(x, y))
            return cState.INVALID;
        return x + (y * this._cols);
    }
    /**
     * Get a cell in a position
     */
    getCell(x, y) {
        if (!this.valid(x, y))
            throw new Error("Célula inexistente.");
        return this._cell[this.index(x, y)];
    }
    setCell(x, y, value) {
        if (value instanceof Cell)
            this._cell[this.index(x, y)] = value;
        else
            this._cell[this.index(x, y)] = new Cell(value);
    }
    /**
     * Return the content of a cell
     */
    cell(x, y) {
        return this.getCell(x, y).getContent();
    }
    /**
     * Checks if the position is valid based on this grid dimensions
     */
    valid(x, y) {
        if (x < 0 || y < 0)
            return false;
        if (x >= this._cols || y >= this._rows)
            return false;
        return true;
    }
    /**
     * Setup a callback instance that will occur for every cell on this grid
     *
     * Callback parameters: the actual cell, x then y position of the cell and a counter
     * that increments on each iteration.
     */
    forEach(callback) {
        let index = 0;
        for (let _y = 0; _y < this.rows; _y++) {
            for (let _x = 0; _x < this.cols; _x++, index++) {
                callback(this.getCell(_x, _y), index, _x, _y);
            }
        }
    }
}
