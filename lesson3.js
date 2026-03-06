const getPerson = (name, age) => {
  const literalUser = {
    name,
    age,
    type: "Object Literal",
  };
 
  function ConstructorUser(name, age) {
    this.name = name;
    this.age = age;
    this.type = "Constructor function";
  }
  const person = new ConstructorUser(name, age);
  class Human {
    constructor(name, age) {
      this.name = name;
      this.age = age;
      this.type = "Class ES6";
    }
  }
  const personClass = new Human(name, age);
  const factoryFunction = (name, age) => {
    return {
      name,
      age,
      type: "Factory function",
    };
  };
  const factoryUser = factoryFunction(name, age);

  const user = Object.assign({}, { name, age }, { type: "Object.assign" });
  const proto = Object.create(literalUser);
  proto.type = "Prototype";
  proto.name = name;
  proto.age = age;

  //  proto.type = 'Prototype'
  // user.push(person)
  return [literalUser, person, personClass, factoryUser, user, proto];
};
console.log(getPerson("eric", 23));

const filterReducer = (arr, callback) => {
  return arr.reduce((acc, curr, index, array) => {
    if (callback(curr, index, array)) {
      acc.push(curr);
    }
    return acc;
  }, []);
};
console.log(filterReducer([1, 2, 3], (n) => n % 2 === 0));
const mapReduce = (arr, callback) => {
  return arr.reduce((acc, curr, index, array) => {
    acc.push(callback(curr, index, array));

    return acc;
  }, []);
};
console.log(mapReduce([1, 2, 3], (el) => el * 2));

const someReduce = (arr, callback) => {

  return arr.reduce((acc, curr, index, array) => {
    return acc || callback(curr, index, array);
  }, false);
};

console.log(someReduce([1, 2, 3], (el) => el % 2 === 0));
const everyReduce = (arr, callback) => {
  return arr.reduce((acc, curr, index, array) => {
    return acc && callback(curr, index, array);
  }, true);
};

console.log(everyReduce([2, 4, 6], (el) => el % 2 == 0));
console.log(everyReduce([1, 4, 6], (el) => el % 2 == 0));
const reversedReduce = (arr) => {
  return arr.reduce((acc, curr, index, array) => {
    acc.unshift(curr);
    return acc;
  }, []);
};
console.log(reversedReduce([1, 2, 3]));


