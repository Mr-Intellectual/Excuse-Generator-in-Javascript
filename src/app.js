/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

function excuses() {
  let excue = "";
  excue += `${who[Math.floor(Math.random() * who.length)]}`;
  excue += ` ${action[Math.floor(Math.random() * action.length)]}`;
  excue += ` ${what[Math.floor(Math.random() * what.length)]}`;
  excue += ` ${when[Math.floor(Math.random() * when.length)]}`;
  return excue;
}

window.onload = function() {
  //write your code here

  document.querySelector("#excuse").innerHTML = excuses();

  console.log(excuses());

  console.log("Hello Rigo from the console!");
};
