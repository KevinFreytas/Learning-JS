// Create an array (list) of days of the week. Used afterwards to check if the input is a day.
const daysOfTheWeek = [
  'sunday', 'monday', 'tuesday', 'wednesday',         'thursday', 'friday', 'saturday'
];

const getSleepHours = day => {
  // Turn the input into lower case letters, to treat the input in a easier way.
  day = day.toLowerCase();

  // Check if the input is really a day of the week. If not, return a message asking the user to enter a valid day.
  if (daysOfTheWeek.indexOf(day) === -1) {
    return 'Enter a valid day of the week';
  }

  // Return the corresponding sleep hours for each day of the week.
  switch (day) {
    case 'sunday':
    return 9;
    break;

    case 'monday':
    return 7;
    break;

    case 'tuesday':
    return 6;
    break;

    case 'wednesday':
    return 5;
    break;

    case 'thursday':
    return 8;
    break;

    case 'friday':
    return 7.5;
    break;

    case 'saturday':
    return 10;
    break;
  }
}

// This function returns the total slept hours. It iterates through the array daysOfTheWeek and sums each corresponding sleep hours to the variable totalSleepHours.
const getActualSleepHours = () => {
  let totalSleepHours = 0;
  for (day of daysOfTheWeek) {
    totalSleepHours += getSleepHours(day);
  }
  return totalSleepHours;
}

// This function tells how many sleep hours are ideal to sleep and multiply it by the number of days of the week. According to some researches, it's ideal to sleep between 7 to 8 hours per day. So, I chose to put as a average value of 7.5 hours.
const getIdealSleepHours = () => {
  let idealHours = 7.5 * 7;
  return idealHours;
}

// This function calculates the sleep debt using the other functions created. It stores the actual and ideal sleep hours into two variables. It also checks if the actual is equal, greater or lower to the ideal sleep hours. Finnaly, it returns a message telling the user how many hours they sleep a week and if it's not the perfect amount, how many hours should they sleep more or less.
const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {

    console.log(`Congratulations! You sleep ${actualSleepHours} hours per week and that's the perfect amount of sleep.`);
  } else if (actualSleepHours < idealSleepHours) {
    let diffSleepHours = idealSleepHours - actualSleepHours;
    console.log(`You sleep ${actualSleepHours} hours per week. Your sleep hours are ${diffSleepHours} hours lower than the ideal. You should get some rest.`);
  } else {
    let diffSleepHours = actualSleepHours - idealSleepHours;
    console.log(`You sleep ${actualSleepHours} hours per week. Your sleep hours are ${diffSleepHours} hours greater than the ideal. You should sleep less and be more active.`)
  }
}

calculateSleepDebt();
