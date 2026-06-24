//You have an array of user objects, each one has name, surname and id.

//Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

function fullName(anArray) {
    let anotherArray = [];

    for(let i = 0; i < anArray.length; i++) {
        let anotherObject = {};
        anotherObject["fullName"] = anArray[i].name + " " + anArray[i].surname;
        anotherObject["id"] = anArray[i].id;
        anotherArray.push(anotherObject); 
    }

    return anotherArray;
}

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

//Alternative solution
// let usersMapped = users.map(user => ({
//   fullName: `${user.name} ${user.surname}`,
//   id: user.id
// }));

let usersMapped = fullName(users);

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

console.log( usersMapped[0].id ); // 1
console.log( usersMapped[0].fullName ); // John Smith