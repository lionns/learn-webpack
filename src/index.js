import Template from './templates/Template.js';
import '@styles/main.css';


console.log('Hola')
(async function App() {
  const main = null || document.getElementById('main');
  main.innerHTML = await Template();
})();
