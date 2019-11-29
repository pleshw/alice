import IDrawable from "../models/drawable/Drawable";
import Grid from "../models/grid/Grid";

export default class GridView implements IDrawable {
  private readonly grid: Grid<void>;

  gridWidth: number;
  gridHeight: number;

  cellWidth: number;
  cellHeight: number;

  constructor(grid: Grid<void>, width: number, height: number, cellWidth?: number, cellHeight?: number) {
    this.gridWidth = width;
    this.gridHeight = height;

    this.cellWidth = cellWidth;
    this.cellHeight = cellHeight;

    this.grid = grid;
  }

  private evaluateCellWidth(): number {

  }

  private evaluateCellHeight(): number {

  }

  draw(context: CanvasRenderingContext2D): void {
    throw new Error("Method not implemented.");
  }
}