class Bird{
  constructor(){
    this.x = 50;
    this.y = height/2;
    this.width=40;
    this.height = 40;
    this.gravity = 5
    this.image = loadImage("flappyBird-removebg-preview.png");
  }
  
  display(){
    image(this.image,this.x,this.y,this.width, this.height);
    this.y+=5;
    if(this.y > height){
      this.y = height;
    }
  }
  
  
  jump(){
    this.y-=12;
  }
  
  freeze(){
   image(this.image,this.x,this.y,this.width, this.height);
    
  }
  
}