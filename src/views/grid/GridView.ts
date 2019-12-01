abstract class GridView<T> implements IDrawable {
  private readonly grid: Grid<T>;

  width: number;
  height: number;

  cellWidth: number;
  cellHeight: number;

  constructor(grid: Grid<T>, width: number, height: number, cellWidth?: number, cellHeight?: number) {
    this.width = width;
    this.height = height;

    this.grid = grid;

    this.cellWidth = cellWidth || this.evaluateCellWidthToFit();
    this.cellHeight = cellHeight || this.evaluateCellHeightToFit();
  }

  private evaluateCellWidthToFit(): number {
    return this.width / this.grid.cols;
  }

  private evaluateCellHeightToFit(): number {
    return this.height / this.grid.rows;
  }

  abstract draw(context: CanvasRenderingContext2D): void;
  // context.fillStyle = "black"
  // context.fillRect(0, 0, context.canvas.width, context.canvas.height);

  // context.strokeStyle = "white"
  // context.lineWidth = 2;
  // this.grid.forEach((cell, index, x, y) => {
  //   context.strokeRect(x * this.cellWidth, y * this.cellHeight, this.cellWidth, this.cellHeight);
  // });
}