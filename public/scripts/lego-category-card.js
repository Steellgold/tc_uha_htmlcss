class LegoItemCategory extends HTMLElement {
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
      <div class="c">
        <img src="./public/items/categories/${image}.png" alt="${label}" class="category-image">
        <h3>${label}</h3>
      </div>
    `;
  }
}

customElements.define('lego-item-category', LegoItemCategory);
