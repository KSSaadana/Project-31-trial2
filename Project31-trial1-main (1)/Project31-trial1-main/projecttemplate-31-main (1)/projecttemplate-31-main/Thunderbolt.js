class Thunder{
    constructor(x, y, width, height) {
        var options = {
          isStatic:true,

        }
        this.body = Bodies.rectangle(x, y, width,height, options);
        this.width=width;
        this.height=height;
        this.thunder_1 =loadImage('images/thunderbolt/1.png');
        this.thunder_2 =loadImage('images/thunderbolt/2.png');
        this.thunder_3 =loadImage('images/thunderbolt/3.png');
        this.thunder_4 =loadImage('images/thunderbolt/4.png');
       
        World.add(world, this.body);
      }
      display(){
        imageMode(CENTER);       
        image(this.thunder_1,3,-400,150,150);
        image(this.thunder_2,3,-400,150,150);
        image(this.thunder_3,3,-400,150,150);
        image(this.thunder_4,3,-400,150,150);

        translate(this.body.position.x, this.body.position.y);
        rotate();
      
      }
}

