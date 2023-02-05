//CONSTRUCTOR FUNCTION
function Car(brand,model,color){
    this.brand = brand;
    this.model = model;
    this.color = color;
}

function Fruits(name,taste,color){
    this.fruitName = name;
    this.fruitTaste = taste;
    this.fruitColor = color;
}

const bugati = new Car('Bugatti','Vairon','Red');
console.log(bugati.color)

const apple = new Fruits('Apple','Sweet','Reddish');
console.log(apple.fruitTaste);