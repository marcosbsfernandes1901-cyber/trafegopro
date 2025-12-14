// Minimal entry module to mount a simple UI into #root
const root = document.getElementById('root');

function mount() {
  const card = document.createElement('div');
  card.className = 'card';

  card.innerHTML = `
    <div class="logo">
      <div class="dot" aria-hidden></div>
      <div>
        <h1>Seu site com o código fornecido</h1>
        <p>Este é um esqueleto gerado automaticamente. Substitua o conteúdo conforme necessário.</p>
      </div>
    </div>
    <div class="actions">
      <button id="toggle-badge" class="btn">Mostrar/Esconder badge</button>
      <button id="now" class="btn secondary">Data e hora</button>
      <span id="clock" style="margin-left:8px;color:var(--muted);align-self:center"></span>
    </div>
  `;

  root.appendChild(card);

  document.getElementById('toggle-badge').addEventListener('click', () => {
    const b = document.getElementById('lovable-badge');
    if (!b) return;
    b.style.display = b.style.display === 'none' ? 'flex' : 'none';
  });

  document.getElementById('now').addEventListener('click', () => {
    const el = document.getElementById('clock');
    el.textContent = new Date().toLocaleString();
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mount);
} else {
  mount();
}

export {};
