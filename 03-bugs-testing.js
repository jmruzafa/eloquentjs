function Person(name) {
  this.name = name;
}
let ferdinand = Person("Ferdinand"); //not 'new' word used but still it will work
console.log(name);

function PersonStric(name) {
  "use strict";
  this.name = name;
}
let antuan = new PersonStric("Antuan");

function test(label, body) {
  if (!body()) console.log(`Failed: ${label}`);
  else console.log(true);
}

test("convert Latin text to uppercase", () => {
  return "hello".toUpperCase() == "HELLO";
});
test("convert Greek text to uppercase", () => {
  return  "".toUpperCase() == "";
});
test("don't convert case-less characters", () => {
  return "  ".toUpperCase() == " ";
});

function numberToString(n,base = 10) {
    let result = "",sign = "";
    if(n<0){
        sign = "-";
        n=-n;
    }
    do{
        result = String(n % base) + result;
        n /= base;
    }
    while(n >0);
    return sign + result;
}
console.log(numberToString(13,10)+"\n");