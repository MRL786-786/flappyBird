class Obstacle{
  constructor(){
    this.spacing=175;
    this.x= width;
    this.w= 80;
    this.top=random(height/6,height/2);
    this.bottom=height-(this.top+this.spacing);
    this.image= loadImage("flappy-bird-pipe_prev_ui.png");
    this.topImage = loadImage("flappy-bird-pipe_prev_ui-top.png")
   // console.log(this.top,this.bottom, height)
  }
  
  display(){
    
    image(this.topImage,this.x,this.top/2,this.w,this.top);
    image(this.image,this.x,height-this.bottom/2,this.w,this.bottom);
    this.x-=4;
  }
  
  offScreen(){
    if (this.x < 0) {
      return true 
    }
    else{
      return false
    }
  }
  
 isTouching(bird){
   if(bird.y < this.top || bird.y > height-this.bottom){
     if(bird.x > this.x && bird.x < this.x+ this.w){
       return true
     }
     else{
       return false
     }
   }
   return false
 }
     
   
 freeze(){
       image(this.topImage,this.x,this.top/2,this.w,this.top);
    image(this.image,this.x,height-this.bottom/2,this.w,this.bottom);
 }
  
  
}