class SearchBar extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({
      mode: "open",
    });
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this._shadowRoot.querySelector("#searchElement").value;
  }

  render() {
    this._shadowRoot.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;
            }
            
            .search-container {
                max-width: 500px;
                text-align: center;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                padding: 5px;
                margin: 25px auto;
                border-radius: 25px;
                display: flex;
                background-color: white;
            }

            .search-container:hover {
                box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2);
            }

            .search-container>input {
                width: 75%;
                padding: 16px;
                border: 0;
                border-radius: 25px;
                font-weight: bold;
            }

            .search-container>input:focus, button:focus {
                outline: 0;
            }

            .search-container>input:focus::placeholder {
                font-weight: 600;
            }

            .search-container>input::placeholder {
                color: cornflowerblue;
                font-weight: normal;
            }

            .search-container>button {
                width: 23%;
                cursor: pointer;
                margin-left: auto;
                background-color: rgb(0, 139, 253);
                color: white;
                border-radius: 25px;
                border: 0;
                text-transform: uppercase;
            }
        </style>

        <div id="search-container" class="search-container">
            <input placeholder="Search Pokemon Name" id="searchElement" type="search">
            <button id="searchButtonElement" type="submit">Search</button>
        </div>
        `;
    this._shadowRoot
      .querySelector("#searchButtonElement")
      .addEventListener("click", this._clickEvent);
    this._shadowRoot
      .querySelector("#searchElement")
      .addEventListener("keyup", (e) => {
        if (e.code === "Enter") {
          this._clickEvent(e);
        }
      });
  }
}

customElements.define("search-widget", SearchBar);
