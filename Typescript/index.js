var parrot = {
    name: 'Bobbi',
    age: 1,
    foodAmount: 3,
    nameOfType: 'parrot',
    biome: 'forest',
    reservoir: false,
    area: 20,
    food: 'seed',
    IsPredator: false
};
var fox = {
    name: 'Biscuit',
    age: 7,
    foodAmount: 4,
    nameOfType: 'fox',
    biome: 'forest',
    reservoir: false,
    area: 25,
    food: 'animal',
    IsPredator: true
};
var tortoise = {
    name: 'Donatello',
    age: 6,
    foodAmount: 2,
    nameOfType: 'tortoise',
    biome: 'lake',
    reservoir: true,
    area: 50,
    food: 'grasses',
    IsPredator: false
};
var elephant = {
    name: 'Horton',
    age: 40,
    foodAmount: 100,
    nameOfType: 'elephant',
    biome: 'lake',
    reservoir: true,
    area: 80,
    food: 'grasses',
    IsPredator: false
};
var CageForAnimals = {
    animals: [],
    biome: 'forest',
    reservior: false,
    capacity: 3,
    isForPredator: true
};
function CheckCage(animal, cage) {
    var count = 0;
    if (animal.reservoir == cage.reservior && animal.biome == cage.biome && animal.IsPredator == cage.isForPredator) {
        for (var j = 0; j < cage.animals.length; j++) {
            count = count + 1;
        }
        if (cage.capacity > count) {
            cage.animals.push(animal);
        }
        else {
            console.log("There are not enough space ");
        }
    }
    else {
        console.log("The cage is not avilable for  -".concat(animal.name));
    }
}
function ShowAllNamesInCage(cage) {
    for (var i = 0; i < cage.animals.length; i++) {
        console.log(cage.animals[i].name);
    }
}
CheckCage(parrot, CageForAnimals);
CheckCage(fox, CageForAnimals);
CheckCage(tortoise, CageForAnimals);
CheckCage(elephant, CageForAnimals);
ShowAllNamesInCage(CageForAnimals);
