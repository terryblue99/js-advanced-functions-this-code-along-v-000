// When we use bind, we actually create a new function with the this
// value set, and we can execute it whenever.
// We need to hold our bound function somewhere so we can call it later
function Sandwich(bread, ingredients, name) {
  this.bread = bread
  this.ingredients = ingredients
  this.name = name
  // this function describes the ingredients of our sandwich, 
  // and it's a method of our Sandwich object
  this.describe = function() {
      console.log(
          `Your ${this.name} includes: ${this.ingredients.join(', ')}. Yum!`
      );
  };
}

// this function sends a server to a table to check on a customer
function visitTable() {
    console.log(
        `The server is visiting ${this.name} at table number ${this.tableNumber}.`
    );
}

// a Customer object that we'll use to represent new customers 
// when they come in.
function Customer(name, tableNumber) {
    this.name = name;
    this.tableNumber = tableNumber;
}

const blt = new Sandwich(
  'White',
  ['Bacon', 'Lettuce', 'Tomato', 'Mayo'],
  'BLT'
)

const salad = {
    ingredients: [
        'Croutons',
        'Romaine Hearts',
        'Steak',
        'Parmesan',
        'Caesar Dressing'
    ],
    name: 'Steak Caesar'
};

// We need to hold our bound function somewhere so we can call it later
// Note: salad is assigned to 'this'.
// we're now borrowing describe from blt using bind, and assigning 
// it to salad.describe.
salad.describe = blt.describe.bind(salad)

salad.describe()

// Now when a new customer comes in, we want to create a new Customer object, 
// then set up a timer for the server to come after they've had enough 
// time to look at the menu. We know that setTimeout takes a function as an 
// argument, and we know that we can't directly invoke visitTable() because 
// we need to set this. Let's use our new friend bind to create a new function 
// with that customer bound to this that we can execute within setTimeout:

//create new Customer instance
const sally = new Customer('Sally', '4');
 
//schedule table visit
const visitSally = visitTable.bind(sally);   
setTimeout(visitSally, 1000); // 1 second

// And we can continue like this, using bind to create new
// functions for each customer that comes in, setting the this 
// for the function to that customer, and giving those functions
// to setTimeout to schedule table visits for each person.
