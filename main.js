let bike;
let bouteilles = [];
let voitures = [];
let voitureBleues = [];

const ctx = document.querySelector('#game-board canvas').getContext('2d');
const W = ctx.canvas.width;
const H = ctx.canvas.height;


function draw(){

  ctx.clearRect(0,0,W,H);
  

 //
  // Step 1: road drawing
  //

ctx.beginPath();
ctx.moveTo(200,0);
ctx.lineTo(200,1600);
ctx.lineWidth = 2;
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(400,0);
ctx.lineTo(400,1600);
ctx.lineWidth = 2;
ctx.stroke();
ctx.closePath();


ctx.beginPath();
  ctx.lineWidth = 13;
  ctx.strokeStyle = 'white';
  ctx.setLineDash([50, 40]);
  ctx.moveTo(300,0); ctx.lineTo(300,670);
  ctx.stroke();

  //
  // Step 2: bike drawing
  //

  bike.draw();

  if (frames % 150 ===0){
    var bouteille = new Bouteille();
    bouteilles.push(bouteille);
  }

  bouteilles.forEach(function (bouteille) {
    bouteille.y += 5;
    bouteille.draw();
  });

  if (frames % 90 ===0){
    var voiture = new Voiture();
    voitures.push(voiture);
  }
  console.log('voitures', voitures);
  voitures.forEach(function (voiture) {
    voiture.y += 5;
    voiture.draw();
  });

  if (frames % 120 ===0){
    var voitureBleue = new VoitureBleue();
    voitureBleues.push(voitureBleue);
  }
  voitureBleues.forEach(function (voitureBleue) {
    voitureBleue.y += 5;
    voitureBleue.draw();
  });





   //
  // Iteration #5: collisions
  //

  for (bouteille of bouteilles) {
    if (bouteille.hits(bike)) {
      console.log('crashed');
      gameover = true;
    }
  }

  //
  // Iteration #6: points
  //

  ctx.font = "50px Arial";
  ctx.textAlign = "right";
  ctx.fillStyle = "black";
  ctx.fillText(`${points} pts`, W-50, 100);
  points++;


}

  document.onkeydown = function (e) {
    if (!bike) return;
    
    console.log('keydown');
    switch (e.keyCode) {
      case 37:
        // left
        bike.moveLeft();
        break;
      case 39:
        //right
        bike.moveRight();
        break;
    }
  }


let raf;
let frames = 0;
function animLoop() {
  frames++;

  draw();
  
  if (!gameover) {
    raf = requestAnimationFrame(animLoop);
}
}


function startGame() {
  
  if (raf){
    cancelAnimationFrame(raf);
  }

    gameover = false;
    points = 0;
    bike = new Bike();
    bouteilles = [];
    voitures = [];
    voitureBleues = [];
    raf = requestAnimationFrame(animLoop);
    
  }

  document.getElementById("start-button").onclick = function() {
    startGame();
  };
  

