/*
    Display output to the screen. This can be done with Node.js writing to the terminal, or in a browser using html.

    Native Array ES6 functions

    Recursion

    Use a JavaScript library written by someone else in your code (could be an npm package if using Node, or a cdn link for any JS library)

Stretch Challenges (select one):

    Demonstrate throwing and handling exceptions

    Create DOM structures with CSS (if using browser), or use 2 more npm packages if using Node.js.
*/

// simple function to display output to the terminal
function displayOutput() {
    console.log("This is an example of a displayed output")
    console.log()
}

displayOutput()

// functions to demonstrate array functions
function ingredientsArray() {

    // creating new arrays
    const myPantry = []
    const myShoppingList = []

    // adding my things to one of the arrays
    myPantry.push('sugar','flour')
    //console.log(myPantry)

    // adding to the other array
    myShoppingList.push('oatmeal', 'egg', 'egg')
    //console.log(myShoppingList)

    // removing the last entry from the array
    myShoppingList.pop()
    //console.log(myShoppingList)

    // I want to combine the two of them so I will use concat
    const myIngredients = myPantry.concat(myShoppingList)
    //console.log(myIngredients)

    // demonstrating find
    var finding = myIngredients.find((x) => x == 'oatmeal')
    //console.log(finding)

    console.log('These are my ingredients:')
    for (i of myIngredients) {
        console.log(i)
    }

}

ingredientsArray()

// recursion
function recurse(number) {
    //sets the condition
    if (number != 0) {
        //prints to terminal
        console.log(number)
        //chanegs the variable
        number -= 1
        //runs the function with the new number
        recurse(number)
    }
}

console.log()
console.log('This is and example of recursion:')
recurse(5) 
// should iterate 5 times through the function because of recursion
console.log()
console.log('Another example:')
recurse(10) 
// should iterate 10 times through the function because of recursion

// implement npm that contains random names for a cat
function catNamer(numCats) {
    //set this variable to require the package
    var cat = require('cat-namer');
    //I then use a loop for each cat depending on the number that was specified
    for (let i = 0; i < numCats; i++) {
        myCat = cat.random();
        console.log()
        console.log(myCat)
    }
}

console.log("Here are your cat names:")

catNamer(5) // should display 5 names

//function attempting to demonstrate the use of the npm package and use it within an array
function makeCats(numCats) {
    var cat = require('cat-namer');
    const catArray = []

    for (let i = 0; i < numCats; i++){
        catArray.push(cat.random())
    }

    console.log()
    console.log("List of cats:")
    console.log(catArray)

}

makeCats(5)
