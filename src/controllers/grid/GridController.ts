
class GridController<T> extends Grid<T> {

  /**
   * Changes a grid cell state to free
   * 
   * A free cell is not blocked and occupied
   * @param x 
   * @param y 
   */
  free(x: number, y: number): void {
    this.getCell(x, y).free();
  }

  /**
  * Changes a grid cell state to occupied
  *  
  * @param x
  * @param y
  */
  occupy(x: number, y: number): void {
    this.getCell(x, y).occupy();
  }

  /**
  * Changes a grid cell state to blocked
  *
  * @param x
  * @param y
  */
  block(x: number, y: number): void {
    this.getCell(x, y).block();
  }

  /**
   * Returns an array with all valid adjacent cells to the point.
   * @param x The x axis value of the point
   * @param y The y axis value of the point
   * @param getDiagonal includes diagonals, true by default.
   */
  adjacent(x: number, y: number, getDiagonal: boolean = true): Cell<T>[] {
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
  adjacentPosition(x: number, y: number, getDiagonal: boolean = true): Coords[] {
    let adjacent: Coords[] =
      [{ x: x, y: y - 1 },
      { x: x + 1, y: y },
      { x: x, y: y + 1 },
      { x: x - 1, y: y }];

    if (getDiagonal) {
      adjacent.push(
        { x: x + 1, y: y - 1 },
        { x: x - 1, y: y - 1 },
        { x: x + 1, y: y + 1 },
        { x: x - 1, y: y + 1 });
    }
    return adjacent.filter(_pos => { return this.valid(_pos.x, _pos.y); });
  }

  /**
   * Returns the copy of a part of this grid.
   * @param to 
   * @param from 
   */
  getPart(from: Coords, to: Coords): Grid<T> {
    let newGridWidth: number = to.x - from.x;
    let newGridHeight: number = to.y - from.y;

    let newGrid = new Grid<T>(newGridHeight, newGridWidth);
    for (let y = 0; y < newGridHeight; y++)
      for (let x = 0; x < newGridWidth; x++)
        newGrid.setCell(x, y, this.getCell(from.x + x, from.y + y).copy())

    return newGrid;
  }
}