type person = {
  name: string;
  email: string;
};

const func1 = <T>(n:T) : T =>{
    return n;
}

const person1:person = {
    name:"Test",
    email:"test@gmail.com"
}

const ans = func1(person1)
