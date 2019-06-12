// call and apply execute functions immediately
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

function serve() {
    if (arguments.length > 0) {
      // The arguments object doesn't have a slice method, because it isn't an array, 
      // so we have to go through Array.prototype to get to the slice function, 
      // and then explicitly set its this to our arguments in order to turn them 
      // into an array. This is known as borrowing a function.
      const customers = Array.prototype.slice.call(arguments);
      if (arguments.length > 1) {
        last = customers.pop();
        console.log(`${this.name} for ${customers.join(', ')} and ${last}. Enjoy!`);
      } else {
        console.log(`Hey ${customers[0]}, here's your ${this.name}. Enjoy!`);
      }  
    } else {
        console.log(`${this.name}. Order up!`);
    }
}

function deliverFood(customer, table) {
  console.log(`Delivering ${this.name} at table ${table}`)
}

const blt = new Sandwich(
  'White',
  ['Bacon', 'Lettuce', 'Tomato', 'Mayo'],
  'BLT'
)

const reuben = new Sandwich (
  'Rye',
  ['Corned Beef', 'Sauerkraut', 'Swiss', 'Russian Dressing'],
  'Reuben'
)

const gc = new Sandwich('White', ['Cheese'], 'Grilled Cheese');

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

deliverFood.call(blt, 'Terry', '4')
deliverFood.apply(reuben, ['Erica', '4'])

serve.call(blt, 'Terry')
serve.apply(reuben, ['Erica'])

serve.call(blt)
serve.apply(gc, ['Terry', 'Erica', 'Sue', 'Fred'])

blt.describe()

// Function borrowing is a great way to use the functions of another 
// object without having to explicitly write them into your object.
// this works because we use call to explicitly set this on the 
// describe method to our salad object, even though the function 
// is attached to an instance of a Sandwich
reuben.describe.call(salad)

