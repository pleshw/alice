"use strict";
document.addEventListener("DOMContentLoaded", _ => {
    let canvas = document.getElementById('testCanvas');
    let context = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let grid = new Grid(10, 10);
    // let gridView = new GridView(grid, canvas.width, canvas.height);
    // gridView.draw(context);
});
