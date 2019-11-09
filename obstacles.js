function random(from, to) {
    return Math.floor(from + Math.random()*(to - from));
  }
  

  class Bouteille {

    constructor() {
    
    const bouteilleimg = document.createElement('img');
    bouteilleimg.onload = () => {
        this.bouteilleimg = bouteilleimg;
        const bouteilleimgRatio = bouteilleimg.naturalWidth/bouteilleimg.naturalHeight;

        this.w = 35; 
        this.h = 55;
  
        this.x = random(200, 400);
        this.y = -this.h;
    }
    bouteilleimg.src="./images/bottle.png";
}
    

    draw() {
        if (!this.bouteilleimg) return; // if `this.img` is not loaded yet => don't draw

        ctx.drawImage(this.bouteilleimg, this.x, this.y, this.w, this.h);
    
    }
  
    hits(bike) {
      return (
        (bike.x+bike.w >= this.x && bike.x <= this.x+this.w) 
        &&
        (bike.y <= this.y+this.h && bike.y+bike.h >= this.y)
      );
    }
  }
