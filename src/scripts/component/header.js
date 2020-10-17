class HeaderBar extends HTMLElement {
  connectedCallback() {
    this.id = this.getAttribute("id") || null;
    this.class = this.getAttribute("class") || null;
    this.render();
  }

  render() {
    this.innerHTML = `
        <style>
            .header {
                text-align: center;
                width: 100%;
                display: block;
                background: rgb(0, 139, 253);
                border-radius: 0 0 50px 50px;
                border: 3px solid rgba(48, 200, 214);
                animation: lineRGB 6s linear 1s infinite alternate;
            }
            
            .header > h1 {
                padding: 5px;
                font-family: "Black Ops One";
            }
        </style>
        <div class="header">
            <h1>POKEDEX</h1>
        </div>
        `;
  }
}

customElements.define("header-bar", HeaderBar);
