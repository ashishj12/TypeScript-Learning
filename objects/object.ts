//best method is to define an object is declare types of object before

type Obj = {
  height: Number;
  weight: Number;
  gender?: boolean; //? is use to define the field is optional
};

const obj: Obj = {
  height: 3432,
  weight: 34,
  gender: true,
};

const obj2: Obj = {
  height: 1232,
  weight: 90,
  gender: false,
};

const obj3: Obj = {
  height: 1232,
  weight: 90,
};
