class Shape{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    getArea(){
        let area = this.width * this.height
        return area;
    }
}

let rec1 = new Shape(3,4);
console.log(rec1.getArea());


// Rectangle 
class Rectangle extends Shape{
    constructor(width, height){
        super(width,height);
    }
    // 메소드 추가 
    getDiagonal(){
        let diago = Math.sqrt(this.width**2 + this.height**2)
        return diago;
    }
}
let RecDiag = new Rectangle(3,4);
console.log(RecDiag.getDiagonal())

//Triangle
class Triangle extends Shape{
    constructor(width, height){
        super(width, height);
    }
    
    getArea(){
        let areaT = this.width * this.height / 2;
        return areaT;
    }
}
let tri = new Triangle(3,4)
console.log(tri.getArea())

// Circle
class Circle extends Shape{
    constructor(width, height,radius){
        super(width, height)
        this.radius = radius
    }
    getArea(){
        let areaC = Math.PI * this.radius**2
        return areaC
    }
}
let circle1 = new Circle(4, 4, 2)
console.log(circle1.getArea())