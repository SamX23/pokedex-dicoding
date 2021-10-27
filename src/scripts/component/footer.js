class FooterBar extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({
      mode: "open",
    });
  }

  connectedCallback() {
    this.id = this.getAttribute("id") || null;
    this.class = this.getAttribute("class") || null;
    this.render();
  }

  render() {
    this._shadowRoot.innerHTML = `
        <style>
            *{
                box-sizing: border-box;
            }
            :host{
                max-width: 700px;
                position: fixed;
                bottom: 0;
                text-align: center;
                width: 100%;
                background: #fefefe;
                border-radius: 50px 50px 0 0;
                border: 3px solid rgba(48, 200, 214);
                animation: lineRGB 6s linear 1s infinite alternate;
            }
        </style>
        <p>Copyright &COPY; 2021 - Made with ❤️ by Sami Kalammallah</p>
        `;
  }
}

customElements.define("footer-bar", FooterBar);
