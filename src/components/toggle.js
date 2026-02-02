export function renderToggle(activePage) {
  return `
    <nav class="version-toggle">
      <a href="#v1" class="toggle-btn ${activePage === 'v1' ? 'active' : ''}">V1</a>
      <a href="#v2" class="toggle-btn ${activePage === 'v2' ? 'active' : ''}">V2</a>
    </nav>
  `;
}
