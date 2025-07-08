const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
};

console.log("Number of floors:", building.numberOfFloors);
console.log("Apartments on 1st floor:", building.numberOfAptByFloor.firstFloor);
console.log("Apartments on 3rd floor:", building.numberOfAptByFloor.thirdFloor);
const secondTenant = building.nameOfTenants[1]; // Dan
const rooms = building.numberOfRoomsAndRent.dan[0]; // 4
console.log("Second tenant:", secondTenant);
console.log("Rooms:", rooms);
const sarahRent = building.numberOfRoomsAndRent.sarah[1]; // 990
const davidRent = building.numberOfRoomsAndRent.david[1]; // 500
const danRent = building.numberOfRoomsAndRent.dan[1];     // 1000

if (sarahRent + davidRent > danRent) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
    console.log("Dan’s rent increased to:", building.numberOfRoomsAndRent.dan[1]);
} else {
    console.log("No change in Dan’s rent.");
}
