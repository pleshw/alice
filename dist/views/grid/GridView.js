"use strict";
class GridView {
    constructor(grid, width, height, cellWidth, cellHeight) {
        this.width = width;
        this.height = height;
        this.grid = grid;
        this.cellWidth = cellWidth || this.evaluateCellWidthToFit();
        this.cellHeight = cellHeight || this.evaluateCellHeightToFit();
    }
    evaluateCellWidthToFit() {
        return this.width / this.grid.cols;
    }
    evaluateCellHeightToFit() {
        return this.height / this.grid.rows;
    }
}
