//1.
// Factory functions
function circleMaking(radius){
    return{
        radius,
        draw: function(){
            console.log('draw')
        }
    }
}
// use camel notation for naming 



function CircleMaking(radius){
    this.radius = radius;
    this.draw = function(){
        console.log("Drawing a circle with radius " + this.radius);
    }
}

let circle = new circleMaking(2)
console.log(circle.draw())

let circle2 = new circleMaking(3)
console.log(circle2.draw())


// constructor functions are object which can take functions as key value named as methods
// use Pascal notation for naming


// value type - number, string, boolean, symbols, undefined, null
// reference type - object, array, function, date, regExp, set, map, weak


//2.
// value type store value at different place while assignment where as reference type refers to the object or array or etc on assignment 
let x = 10;
let y = x;
 x = 20;

 console.log(x,y);      // different value as they are independent

let a = {value : 10};
let b = a;
a.value = 20;

console.log(a,b)         // value is same as both refer to same value in memory


//3.
// for...of loop cannot bhi used on objects as the are not iterable hence for..in loop is use or has to convert object into string [] for so
// all functions in javascript are object
const circle1 = {
    radius: 2,
    draw(){
        console.log("Drawing a circle with radius " + this.radius);
    }
}

for(let key in circle){
    console.log(key, circle[key])
}

for(let key of Object.keys(circle)){
    console.log(key, circle[key])
}

for(let entry in Object.entries(circle)){
    console.log(entry)
}

if('radius' in circle) console.log('yes')

// 4. cloning an object

const circle3 = Object.assign({},circle);  // here we assigned the value of circle object to new object, in same way we can add more objects at same time to copy them

const circle4 = {...circle};

