//type asseration means we have to  defined that according to my need i need to change the type
// First Method
// const btn = document.getElementById("btn")
// btn?.onclick //in this ? referes to that there is not any null values
// Second Method
// const btn = document.getElementById("btn")!;
//third method
// const btn = document.getElementById("btn") as HTMLElement;
var form = document.getElementById("myform");
var myinput = document.querySelector("form > input");
form.onsubmit = function (e) {
    e.preventDefault();
    console.log(myinput.form);
};
