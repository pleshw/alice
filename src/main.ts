
document.addEventListener("DOMContentLoaded", _ => {
  let canvas = <HTMLCanvasElement>document.getElementById('testCanvas');
  let context = <CanvasRenderingContext2D>canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let grid = new Grid<IDrawable>(10, 10);
  // let gridView = new GridView(grid, canvas.width, canvas.height);

  // gridView.draw(context);
});
