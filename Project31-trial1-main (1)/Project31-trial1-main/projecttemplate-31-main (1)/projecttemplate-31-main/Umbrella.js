class Umbrella{
    constructor(x, y, width, height) {
        var options = {
          isStatic:true,

        }
        this.body = Bodies.rectangle(x, y, width,height, options);
        this.width=width;
        this.height=height;
        this.walking_1 = loadImage('images/Walking Frame/walking_1.png');
        this.walking_2 = loadImage('images/Walking Frame/walking_2.png');
        this.walking_3 = loadImage('images/Walking Frame/walking_3.png');
        this.walking_4 = loadImage('images/Walking Frame/walking_4.png');
        this.walking_5 = loadImage('images/Walking Frame/walking_5.png');
        this.walking_6 = loadImage('images/Walking Frame/walking_6.png');
        this.walking_7 = loadImage('images/Walking Frame/walking_7.png');
        this.walking_8 = loadImage('images/Walking Frame/walking_8.png');

        World.add(world, this.body);
      }
      display(){
        imageMode(CENTER);       
        image(this.walking_1,155,500,225,225);
        image(this.walking_2,155,500,225,225);
        image(this.walking_3,155,500,225,225);
        image(this.walking_4,155,500,225,225);
        image(this.walking_5,155,500,225,225);
        image(this.walking_6,155,500,225,225);
        image(this.walking_7,155,500,225,225);
        image(this.walking_8,155,500,225,225);

        translate(this.body.position.x, this.body.position.y);
        rotate();
      
      //image(this.image, 0, 0, this.width, this.height);
      }
}

