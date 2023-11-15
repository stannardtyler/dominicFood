let data;
let url = "foodD.csv";

function preload() {
  data = loadTable(url, "csv", "header");
}

function setup() {
  let canvas = createCanvas(600, 400);
  canvas.parent("data");
  //noLoop();
}

function draw() {
  background(0);

  if (data) {
    let numRows = data.getRowCount();
    for (i = 0; i < numRows; i++) {
      let carbs = data.getColumn("Carbs");
      let names = data.getColumn("Food");
      

      fill(255);
      text(names[i], 200, 100 + i * 50);
      rect(50, 100 + i * 50, carbs[i], 20);
    }
  }
}
