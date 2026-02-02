import './style.css'
import { initParticles } from './particles.js'
import { renderV1 } from './pages/v1.js'
import { renderV2, initV2 } from './pages/v2.js'
import { renderToggle } from './components/toggle.js'

function getPage() {
  const hash = window.location.hash.slice(1) || 'v1';
  return hash === 'v2' ? 'v2' : 'v1';
}

function render() {
  const page = getPage();
  const app = document.querySelector('#app');
  
  app.innerHTML = renderToggle(page) + (page === 'v2' ? renderV2() : renderV1());
  
  if (page === 'v2') {
    initV2();
  }
}

window.addEventListener('hashchange', render);

render();
initParticles()
