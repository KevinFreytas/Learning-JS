/* As a frequent diner, you love trying out new restaurants and experimenting with different foods. 
However, having to figure out what you want to order can be a time-consuming ordeal if the menu is big, 
and you want an easier way to be able to figure out what you are going to eat.

In this project, you’ll use JavaScript to randomly create a three-course meal based on what is 
available on a menu. We’ll keep running it until we’re satisfied with the generated meal! */

const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: []
    },
    get appetizers() {
      return this.appetizers;
    },
    set appetizzers(appetizer) {
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
    get courses() {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts
      }
    },
    addDishToCourse(courseName, dishName, dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice,
      };
      this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex];
    },
    generateRandomMeal() {
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      let totalPrice = appetizer.price + main.price + dessert.price;
      return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name}. The total price is \$${totalPrice}.`;
    }
  };
  
  menu.addDishToCourse('appetizers', 'Mini Burgers', 6);
  menu.addDishToCourse('appetizers', 'Baked Chicken Wings', 9);
  menu.addDishToCourse('appetizers', 'Bacon-Wrapped Cherry Peppers', 8);
  
  menu.addDishToCourse('mains', 'Red and White Tortelini', 13);
  menu.addDishToCourse('mains', 'Classic Meatloaf', 15);
  menu.addDishToCourse('mains', 'Pot Roast', 17);
  
  menu.addDishToCourse('desserts', 'Petit Gateau', 12);
  menu.addDishToCourse('desserts', 'Lemon Mousse', 10);menu.addDishToCourse('desserts', 'Apple Cinnamon Custard Cake', 16);
  
  let meal = menu.generateRandomMeal();
  console.log(meal);
  
  