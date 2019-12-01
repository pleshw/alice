class Grid<T> {
  protected _rows: number;
  protected _cols: number;

  private _cell: Array<Cell<T>>;

  constructor(rows: number, cols: number) {
    this._rows = rows;
    this._cols = cols;

    this._cell = new Array<Cell<T>>(rows * cols);

    for (let i = 0; i < this._cell.length; i++)
      this._cell[i] = new Cell<T>();
  }

  public get rows(): number {
    return this._rows;
  }

  public get cols(): number {
    return this._cols;
  }

  /**
   * Copy a grid or a part of it that fits.
   * @param clone the grid that will be copied
   */
  copy(clone: Grid<T>): void {
    for (let y = 0; y < this._rows || y < clone._rows; y++)
      for (let x = 0; x < this._cols || x < clone._cols; x++)
        this._cell[this.index(x, y)] = clone.getCell(x, y);
  }

  get length(): number {
    return this._cell.length;
  }

  get buffer(): Cell<T>[] {
    return this._cell;
  }

  /**
   * Transform x and y values into an index based on this grid
   */
  private index(x: number, y: number): number {
    if (!this.valid(x, y)) return cState.INVALID;
    return x + (y * this._cols);
  }

  /**
   * Get a cell in a position
   */
  getCell(x: number, y: number): Cell<T> {
    if (!this.valid(x, y)) throw new Error("Célula inexistente.");
    return this._cell[this.index(x, y)];
  }

  /**
  * Changes the value of a cell or replaces it with another one.
  */
  setCell(x: number, y: number, value: T): void;
  setCell(x: number, y: number, value: Cell<T>): void;
  setCell(x: number, y: number, value: Cell<T> | T): void {
    if (value instanceof Cell)
      this._cell[this.index(x, y)] = value;
    else
      this._cell[this.index(x, y)] = new Cell<T>(value);
  }

  /**
   * Return the content of a cell
   */
  cell(x: number, y: number): T | null {
    return this.getCell(x, y).getContent();
  }

  /**
   * Checks if the position is valid based on this grid dimensions 
   */
  valid(x: number, y: number) {
    if (x < 0 || y < 0) return false;
    if (x >= this._cols || y >= this._rows) return false;
    return true;
  }

  /**
   * Setup a callback instance that will occur for every cell on this grid
   * 
   * Callback parameters: the actual cell, x then y position of the cell and a counter 
   * that increments on each iteration.
   */
  forEach(callback: (element: Cell<T>, index: number, x: number, y: number) => void): void {
    let index = 0;
    for (let _y = 0; _y < this.rows; _y++) {
      for (let _x = 0; _x < this.cols; _x++ , index++) {
        callback(this.getCell(_x, _y), index, _x, _y);
      }
    }
  }
}