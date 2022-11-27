interface Type{
nameOfType:string;
biome:string;
reservoir:boolean;
area:number;
food:string;
IsPredator:boolean;
}
interface Animal extends Type{
    name:string;
    age:number;
    foodAmount:number;
}
interface Settlement{
    animals:Animal[];
    biome:string;
    reservior:boolean;
    capacity:number;
    isForPredator:boolean;
}
let parrot:Animal={
    name:'Bobbi',
    age:1,
    foodAmount:3,
    nameOfType:'parrot',
    biome:'forest',
    reservoir:false,
    area:20,
    food:'seed',
    IsPredator:false

}
let fox:Animal={
    name:'Biscuit',
    age:7,
    foodAmount:4,
    nameOfType:'fox',
    biome:'forest',
    reservoir:false,
    area:25,
    food:'animal',
    IsPredator:true

}
let tortoise :Animal={
    name:'Donatello',
    age:6,
    foodAmount:2,
    nameOfType:'tortoise',
    biome:'lake',
    reservoir:true,
    area:50,
    food:'grasses',
    IsPredator:false


}
let elephant:Animal={
    name:'Horton',
    age:40,
    foodAmount:100,
    nameOfType:'elephant',
    biome:'lake',
    reservoir:true,
    area:80,
    food:'grasses',
    IsPredator:false


}
let CageForAnimals:Settlement={
    animals:[],
       biome:'forest',
       reservior:false,
       capacity:3,
       isForPredator:true
  }
  function CheckCage(animal:Animal,cage:Settlement) {
    let count:number=0;
   if (animal.reservoir==cage.reservior&&animal.biome==cage.biome&&animal.IsPredator==cage.isForPredator) {  
           for (let j = 0; j < cage.animals.length; j++) {
              count=count+1;  
           }
       if (cage.capacity>count) {
           cage.animals.push(animal);
         

       }
       else{
           console.log("There are not enough space ");  
       }
   }
   else{
       console.log(`The cage is not avilable for  -${animal.name}`);
   }
}
function ShowAllNamesInCage(cage:Settlement) {
   for (let i = 0; i < cage.animals.length; i++) {
             console.log(cage.animals[i].name); 
          } 
}

CheckCage(parrot,CageForAnimals);
CheckCage(fox,CageForAnimals);
CheckCage(tortoise,CageForAnimals);
CheckCage(elephant,CageForAnimals);
ShowAllNamesInCage(CageForAnimals) ;




