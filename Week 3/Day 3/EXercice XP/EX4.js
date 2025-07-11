function hotelCost() {
  let nights;
  do {
    nights = prompt("How many nights would you like to stay at the hotel?");
  } while (isNaN(nights) || nights.trim() === "");

  const cost = Number(nights) * 140;
  return cost;
}
function planeRideCost() {
  let destination;
  do {
    destination = prompt("What is your travel destination?");
  } while (!isNaN(destination) || destination.trim() === "");

  destination = destination.toLowerCase();

  if (destination === "london") {
    return 183;
  } else if (destination === "paris") {
    return 220;
  } else {
    return 300;
  }
}
function rentalCarCost() {
  let days;
  do {
    days = prompt("How many days would you like to rent the car?");
  } while (isNaN(days) || days.trim() === "");

  days = Number(days);
  let cost = days * 40;

  if (days > 10) {
    cost *= 0.95; 
  }

  return cost;
}

function totalVacationCost() {
  const hotel = hotelCost();
  const plane = planeRideCost();
  const car = rentalCarCost();

  const total = hotel + plane + car;

  console.log(`The hotel cost: $${hotel}`);
  console.log(`The plane ticket cost: $${plane}`);
  console.log(`The car rental cost: $${car}`);
  console.log(`Total vacation cost: $${total}`);

  return total;
}
totalVacationCost();
