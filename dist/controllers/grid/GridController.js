"use strict";
class GridController extends Grid {
    /**
     * Changes a grid cell state to free
     *
     * A free cell is not blocked and occupied
     * @param x
     * @param y
     */
    free(x, y) {
        this.getCell(x, y).free();
    }
    /**
    * Changes a grid cell state to occupied
    *
    * @param x
    * @param y
    */
    occupy(x, y) {
        this.getCell(x, y).occupy();
    }
    /**
    * Changes a grid cell state to blocked
    *
    * @param x
    * @param y
    */
    block(x, y) {
        this.getCell(x, y).block();
    }
    /**
     * Returns an array with all valid adjacent cells to the point.
     * @param x The x axis value of the point
     * @param y The y axis value of the point
     * @param getDiagonal includes diagonals, true by default.
     */
    adjacent(x, y, getDiagonal = true) {
        return this.adjacentPosition(x, y, getDiagonal).map((coord) => {
            return this.getCell(coord.x, coord.y);
        });
    }
    /**
     * Return the position for all valid adjacent cells to the point
     * @param x The x axis value of the point
     * @param y The y axis value of the point
     * @param getDiagonal includes diagonals, true by default.
     */
    adjacentPosition(x, y, getDiagonal = true) {
        let adjacent = [{ x: x, y: y - 1 },
            { x: x + 1, y: y },
            { x: x, y: y + 1 },
            { x: x - 1, y: y }];
        if (getDiagonal) {
            adjacent.push({ x: x + 1, y: y - 1 }, { x: x - 1, y: y - 1 }, { x: x + 1, y: y + 1 }, { x: x - 1, y: y + 1 });
        }
        return adjacent.filter(_pos => { return this.valid(_pos.x, _pos.y); });
    }
    /**
     * Returns the copy of a part of this grid.
     * @param to
     * @param from
     */
    getPart(from, to) {
        let newGridWidth = to.x - from.x;
        let newGridHeight = to.y - from.y;
        let newGrid = new Grid(newGridHeight, newGridWidth);
        for (let y = 0; y < newGridHeight; y++)
            for (let x = 0; x < newGridWidth; x++)
                newGrid.setCell(x, y, this.getCell(from.x + x, from.y + y).copy());
        return newGrid;
    }
}
