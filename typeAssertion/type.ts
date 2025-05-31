//type asseration means we have to  defined that according to my need i need to change the type

// First Method
// const btn = document.getElementById("btn")

// btn?.onclick //in this ? referes to that there is not any null values

// Second Method
// const btn = document.getElementById("btn")!;

//third method
// const btn = document.getElementById("btn") as HTMLElement;

const form = document.getElementById("myform") as HTMLFormElement;

const myinput = document.querySelector("form > input") as HTMLInputElement;

form.onsubmit = (e) => {
  e.preventDefault();
  console.log(myinput.form);
};
