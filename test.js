class Shape{
    name;
    sides;
    sideLength;
    constructor(name, sides, sideLength){
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    }
    calcPerimeter(){
        console.log(`Perimeter of this ${this.name} is ${this.sides*this.sideLength}`)
    }
}

class Square extends Shape{
    
    constructor(sideLength){
        super(sideLength);
        
    }

   

    clacArea(){
        console.log(`Area is ${this.sideLength}`);

    }
}

const square = new Shape('square',4,5);
square.calcPerimeter();

const triangle = new Shape('triangle', 3, 3);
triangle.calcPerimeter();

const sq  = new Square(4);
sq.calcPerimeter();
sq.clacArea();
