import App from '../src/components/App.js';

const app = new App();
const appDOM = app.render();
const appDOMNode = document.getElementById('contacts');

appDOMNode.appendChild(appDOM);