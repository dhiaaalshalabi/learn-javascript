// The Rest parameters

function sum(){
  let total = 0;
  for(let value of arguments){
    total+=value;
  }
  return total;
}

function sum1(...args){
  return args.reduce((a,b)=>a+b);
}

function sum2(discount, ...prices){
  let total = prices.reduce((a,b)=>a+b);
  return total * (1 - discount);
}

console.log(sum(1, 8, 9 ,6));
console.log(sum1(1, 8, 9 ,6));
console.log(sum2(0.1, 20,30 ));

// setter and getter

// getters => access properties
// seters => change (mutate) them

const person = {
  firstName:'Diaa',
  lastName:'Shalabi',
  get fullName(){
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value){
    const parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

person.fullName = "John Smith";
console.log(person.fullName);

//
