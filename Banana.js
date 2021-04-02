class Banana{
  constructor(){
    this.x = width;
    this.y= random(150,250)
    this.BananaImage=loadImage("banana-clipart-animated-8_prev_ui.png")
  }
  
  display(){
    image(this.BananaImage,this.x,this.y,20,20);
    this.x -=4;
    
    
  }
  
  isTouching(bird){
   if(bird.y < this.y ){
     if(bird.x > this.x && bird.x < this.x+ 20){
       return true
     }
     else{
       return false
     }
   }
   return false
 }
  
  
  
}
  