import _ from 'lodash';
import myName from './myName';
import './style.css';
import webpackimg from './webpackimg.png';
import Data from './data.xml';
import Notes from './data.csv';
import toml from './data.toml';
import yaml from './data.yaml';
import json from './data.json5';

console.log(toml.title);
console.log(toml.owner.name);

console.log(yaml.title);
console.log(yaml.owner.name);

console.log(json.title);
console.log(json.owner.name);

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // Add the image to our existing div
  const myImg = new Image();
  myImg.src = webpackimg;

  element.appendChild(myImg);

  console.log(Data);
  console.log(Notes);

  return element;
}

function naming(n) {
  const element = document.createElement('div');

  element.textContent = myName(n);
  return element;
}

document.body.appendChild(component());
document.body.appendChild(naming('Cody'));