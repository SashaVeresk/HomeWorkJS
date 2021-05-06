let users = [{name: 'Ivan', age: 18}, {name:'Petr', age: 12}, {name: 'Sidor', age: 25}];
let adult = [];
let children = [];

for (let value of users){
     if (value.age >= 18){
       adult.push(value);
     } else {
        children.push(value);
     };
};