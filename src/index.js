import _ from 'lodash';
import myName from './myName';

function component() {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

function naming(n) {
    const element = document.createElement('div');

    element.textContent = myName(n);
    return element;
}

document.body.appendChild(component());
document.body.appendChild(naming('Cody'));