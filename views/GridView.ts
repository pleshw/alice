import IDrawable from "../models/drawable/Drawable";

export default class GridView implements IDrawable {
  gridWidth: number;
  gridHeight: number;

  cellWidth: number;
  cellHeight: number;

  constructor(width: number, height: number, cellWidth: number, cellHeight: number) {
    this.gridWidth = width;
    this.gridHeight = height;

    this.cellWidth = cellWidth;
    this.cellHeight = cellHeight;
  }

  draw(context: CanvasRenderingContext2D): void {
    throw new Error("Method not implemented.");
  }
}