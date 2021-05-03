var users = [
    {
        name: "Michael",
        age: 37
    },
    {
        name: "John",
        age: 30
    },
    {
        name: "David",
        age: 27
    }
];

// How would you print/log John's age?
for(var age in users){
  if(users[age].name == "John"){
console.log(users[age].age);
  }
}
// How would you print/log the name of the first object?
console.log(users[0].name);
// How would you print/log the name and age of each user using a for loop?  
for(var names in users){
  console.log((users[names].name)+" - "+(users[names].age));
}