class LegoItemCard extends HTMLElement {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return ['image', 'label'];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  render() {
    const image = this.getAttribute('image') || './public/items/categories/0.png';
    const label = this.getAttribute('label') || 'Nouveautés';

    this.innerHTML = `
      <div class="lego-item-card">
        <img src="${image}" alt="LEGO® set">
        <span class="price">${price}</span>
        <p class="item-name">${name}</p>
        
        <div class="item-bottom">
          <div class="item-details">
            <div class="item-age">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cake"><path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/><path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"/><path d="M2 21h20"/><path d="M7 8v3"/><path d="M12 8v3"/><path d="M17 8v3"/><path d="M7 4h.01"/><path d="M12 4h.01"/><path d="M17 4h.01"/></svg>
              <span>${age}</span>
            </div>

            <div class="item-bricks">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-toy-brick"><rect width="18" height="12" x="3" y="8" rx="1"/><path d="M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3"/><path d="M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3"/></svg>
              <span>${bricks}</span>
            </div>
          </div>

          <button>Ajouter au panier</button>
        </div>
      </div>
    `;
  }
}

customElements.define('lego-item-card', LegoItemCard);