var nameVar = 'Siddharth';
var nameVar = 'Mike'; //redefine is also possible
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie'; //cannot refinfe
console.log('nameLet', nameLet);

const nameConst = 'Alice';
//nameConst = 'Abby';//cannot even reassign
console.log('nameConst', nameConst);

//Block Scoping

const fullName = 'Jen Agarwal';
let firstName;
if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName)
};

console.log(firstName)