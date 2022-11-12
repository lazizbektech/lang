// 1-vazifa

// var birthYear = 2009;
// var currentYear = 2022;
// var yoshda = birthYear - currentYear;
// console.log("Sizning yoshingiz " + yoshda + "yoki" + (yoshda - 1));

// 2-vazifa

// var age = 13;
// var maxAge = 80;
// var numPerDay = 10;
// var message = "Sizga kerak bo'ladi " +
//   totalNeeded + " piyola choy keksalikka qadar davom etadi " + maxAge;

// var totalNeeded = numPerDay * 365 * (maxAge - age);
// console.log(message);

// 3-vazifa

// function alphabet_order(str){
//   return str.split("").sort().join("");
// }
// console.log(alphabet_order("ba"));

/*
Dunyo tarjimoni:
*/

// Homework 

var translate = "10 xil tilda salomlashish uslubi"

function helloWorld(lang) {
  if (lang == 'fr') {
    return "Bonjour , Fransuzcha"
  } else if (lang == 'cn') {
    return "你好呀 , Xitoycha"
  } else if (lang == 'en') {
    return "Hello , Inglizcha";
  }
  if (lang == 'ru') {
    return "Привет , Ruscha"
  } else if (lang == 'uz') {
    return "Salom , Uzbekcha";
  } else if (lang == 'yu') {
    return "Γεια σου , Yunoncha";
  } else if (lang == 'ar') {
    return "أهلاً , Arabcha"
  } else if (lang == 'tu') {
    return "Merhaba , Turkcha";
  } else if (lang == 'ia') {
    return "Ciao , Italyancha";
  } else if (lang == 'ne') {
    return "Hi , Nemischa";
  }
}

console.log(translate);
console.log(helloWorld("en"));
console.log(helloWorld("fr"));
console.log(helloWorld("cn"));
console.log(helloWorld("ru"));
console.log(helloWorld("uz"));
console.log(helloWorld("yu"));
console.log(helloWorld("ar"));
console.log(helloWorld("tu"));
console.log(helloWorld("ia"));
console.log(helloWorld("ne"));

// Today lesson

// let text = "this is my comment this on";
// let search = /[^A-h]/g;
// let result = text.match(search);
// console.log(result);

// RegExp

// const text = new RegExp(/^g...t$/);
// console.log(text.test("guest"));