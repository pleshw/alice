import { Cell, CellState as cState } from "./Cell";


export default class Grid<T> {
  protected rows: number;
  protected cols: number;

  private _cell: Array<Cell<T>>;

  constructor(rows: number, cols: number) {
    this.rows = rows;
    this.cols = cols;

    this._cell = new Array<Cell<T>>(rows * cols);

    for (let i = 0; i < this._cell.length; i++)
      this._cell[i] = new Cell(cState.FREE);
  }

  copy(clone: Grid<T>): void {
    for (let y = 0; y < this.rows; y++)
      for (let x = 0; x < this.cols; x++)
        this._cell[this.index(x, y)] = clone._cell[clone.index(x, y)];
  }

  get length(): number {
    return this._cell.length;
  }

  get buffer(): Cell<T>[] {
    return this._cell;
  }

  index(x: number, y: number): number {
    if (!this.valid(x, y)) return cState.INVALID;
    return x + (y * this.cols);
  }

  cell(x: number, y: number): Cell<T> {
    if (!this.valid(x, y)) throw new Error("Célula inexistente.");
    return this.cell[this.index(x, y)];
  }

  valid(x: number, y: number) {
    if (x < 0 || y < 0) return false;
    if (x >= this.cols || y >= this.rows) return false;
    return true;
  }
}