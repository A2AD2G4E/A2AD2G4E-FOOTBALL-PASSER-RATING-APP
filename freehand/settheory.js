/*jshint esversion: 6 */


//let myBox = ['hello', 1, 2, 3, true, 'hi'];
//let colors = ['green', 'yellow', 'blue', ];

//console.log(colors.toString());

//console.log(colors.join('-'));

/*let firstNumbers = [1, 2, 3];
let secondNumbers = [4, 5, 6];
let merged = firstNumbers.concat(secondNumbers);
console.log(merged);*/

/*let browsers = ['chrome', 'firebox', 'edge'];
browsers.push('safari', 'opera mini');
console.log(browsers);*/

/*let browsers = ['chrome', 'firebox', 'edge'];
browsers.pop();
console.log(browsers);*/

/*let browsers = ['chrome', 'firebox', 'edge'];
browsers.shift(); //"chrome"
console.log(browsers);//["firebox", "edge"]*/

/*Array.splice(index[, deleteCount, element1, ...AbortController, elementN])
    //this is the syntax this method splice changes can array, by adding, removing, and inserting elements//*/

/*let colors = ['green', 'yellow', 'blue', 'purple'];
colors.splice(0, 3);
console.log(colors);*/

const circle = {
    radius: 1,
    get area() {
        return Math.PI * this.radius * this.radius;

    }

};
console.log(circle.area);