/* As a frequent diner, you love trying out new restaurants and experimenting with different foods. 
However, having to figure out what you want to order can be a time-consuming ordeal if the menu is big, 
and you want an easier way to be able to figure out what you are going to eat.

In this project, you’ll use JavaScript to randomly create a three-course meal based on what is 
available on a menu. We’ll keep running it until we’re satisfied with the generated meal! */

// This "menu" object will encompass all other objects and methods.
const menu = {
    // This property will ultimately containn a mapping between each course and the dishes available
    // to order in that course.
    _courses: {
      // There are 3 options of courses, and they're initialized as empty arrays.
      appetizers: [],
      mains: [],
      desserts: []
    },
    // Getters and setters for each course.
    get appetizers() {
      return this.appetizers;
    },
    set appetizzers(appetizer) {
      // It first compares if the input is a string. If isn't, return a message.
      if (typeof appetizer === 'string') {
        this.appetizers.push(appetizer);
      } else {
        return 'Your appetizer is not a text. Try again.'
      }
    },
    get mains() {
      return this.mains;
    },
    set mains(main) {
      if (typeof main === 'string') {
        this.mains.push(main);
      } else {
        return 'Your main is not a text. Try again.'
      }
    },
    get desserts() {
      return this.desserts;
    },
    set desserts(dessert) {
      if (typeof dessert === 'string') {
        this.desserts.push(dessert);
      } else {
        return 'Your dessert is not a text. Try again.'
      }
    },
    // This getter joins all 3 courses.
    get courses() {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts
      }
    },
    // This method allows the user to add dishes according to the respective course.
    // It also creates an object called "dish" and pushes it into the appropriate array in the "menu"'s "_courses" object.
    addDishToCourse(courseName, dishName, dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice,
      };
      this._courses[courseName].push(dish);
    },
    // Allow us to get a random dish from a course on the menu.
    getRandomDishFromCourse(courseName) {
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex];
    },
    // This method uses the last one to get 3 random dishes, each from a different course,
    // sums their price and return a string containing all the information.
    generateRandomMeal() {
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      let totalPrice = appetizer.price + main.price + dessert.price;
      return `Your meal is: ${appetizer.name}, ${main.name} and ${dessert.name}. The total price is \$${totalPrice}.`;
    }
  };
  
  // Here I manually added 3 dishes each course and their price.
  menu.addDishToCourse('appetizers', 'Mini Burgers', 6);
  menu.addDishToCourse('appetizers', 'Baked Chicken Wings', 9);
  menu.addDishToCourse('appetizers', 'Bacon-Wrapped Cherry Peppers', 8);
  
  menu.addDishToCourse('mains', 'Red and White Tortelini', 13);
  menu.addDishToCourse('mains', 'Classic Meatloaf', 15);
  menu.addDishToCourse('mains', 'Pot Roast', 17);
  
  menu.addDishToCourse('desserts', 'Petit Gateau', 12);
  menu.addDishToCourse('desserts', 'Lemon Mousse', 10);menu.addDishToCourse('desserts', 'Apple Cinnamon Custard Cake', 16);
  
  // And finally, create a variable called meal that will contain a random meal.
  let meal = menu.generateRandomMeal();
  console.log(meal);
  
  
