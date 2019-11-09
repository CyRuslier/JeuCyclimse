function random(from, to) {
    return Math.floor(from + Math.random()*(to - from));
  }


  class Voiture {

    constructor() {

    const voitureimg = document.createElement('img');
    voitureimg.onload = () => {
        this.voitureimg = voitureimg;

        const voitureimgRatio = voitureimg.naturalWidth/voitureimg.naturalHeight;

        this.w = 110; 
        this.h = 200;
  
        this.x = (0);
        this.y = -this.h;
        }
    voitureimg.src="./images/voiture.png";
}
    
    draw() {
        if (!this.voitureimg) return; // if `this.img` is not loaded yet => don't draw
        ctx.drawImage(this.voitureimg, this.x, this.y, this.w, this.h);
    
    }
  
  }



  class VoitureBleue {

    constructor() {
        console.log('test');

    const voitureBleueimg = document.createElement('img');
    voitureBleueimg.onload = () => {
        this.voitureBleueimg = voitureBleueimg;

        const voitureBleueimgRatio = voitureBleueimg.naturalWidth/voitureBleueimg.naturalHeight;

        this.w = 200; 
        this.h = 200;
  
        this.x = (0);
        this.y = -this.h;
        }
    voitureBleueimg.src="./images/voitureBleue.png";
}
    
    draw() {
        if (!this.voitureBleueimg) return; // if `this.img` is not loaded yet => don't draw
        ctx.drawImage(this.voitureBleueimg, this.x, this.y, this.w, this.h);
    
    }
  
  }