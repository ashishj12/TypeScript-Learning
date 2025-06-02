// // interface person {
// //   name: string;
// //   age: number;
// //   gender: boolean;
// // }

// // type p1 = {
// //     name:string,
// //     age: number
// // }

// // interface PName implements as pName {

// // }

// type myCar = {
//     name: string,
//     model: number,
// }

// const model:myCar = 2001

interface Rectanlge {
  height: number;
  weight: number;
}

interface myRectange extends Rectanlge {
  color: string;
}

const coloredRectangle: myRectange = {
  color: "red",
  height: 12,
  weight: 20,
};

console.log(coloredRectangle);
