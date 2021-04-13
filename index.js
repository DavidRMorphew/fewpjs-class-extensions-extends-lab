// Your code here
class Polygon{
    constructor(array){
        const polygon = this
        for (let i = 0; i < array.length; i++){
            let side = `side${i+1}`
            polygon[side] = array[i]
        }
    }
    get countSides(){
        return Object.keys(this).length;
    }
    get perimeter(){
        return Object.values(this).reduce((accumulator, el) => accumulator + el, 0);
    }
};

class Triangle extends Polygon {
    get isValid(){
        const hasThreeSides = this.countSides === 3
        const orderedSides = Object.values(this).sort()
        const sidesLongEnough = (orderedSides[0] + orderedSides[1]) > orderedSides[2]
        return hasThreeSides && sidesLongEnough
    }
};
class Square extends Polygon {
    get area(){
        return this.side1**2
    }
    get isValid(){
        const hasFourSides = Object.values(this).length === 4;
        // const allSidesEqual = Object.values(this).every(val => val === this.side1);
        const allSidesEqual = new Set(Object.values(this)).size === 1;
        return hasFourSides && allSidesEqual;
    }
}
