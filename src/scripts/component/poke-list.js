import "./poke-item.js";

class PokeList extends HTMLElement {
  set poke(poke) {
    this._poke = poke;
    this.render();
  }

  renderError(e) {
    const keyword = document.querySelector("search-widget").value;
    this.innerHTML = `
        <style>
            .card{
                padding:0;
                border-radius:25px;
            }
            .card-header {
                border-radius: 25px 25px 0 0;
            }
            h3,p {
                padding-top:20px;
                color: rgba(0, 0, 0, 0.5);
                user-select: none;
                text-align:center;
            }
        </style>
        <div class="container">
            <div class="card">
                <div class="card-header">
                    <h3>Googling Pokemon Names !</h3>
                    <p>${keyword} is not found !</p>
                    <p>Example : Pikachu</p>
                </div>
            </div>
        </div>
        `;
  }

  render() {
    this.innerHTML = "";
    const itemElement = document.createElement("poke-item");
    itemElement.item = {
      id: this._poke.id,
      name: this._poke.name,
      skill_1: this._poke.abilities[0].ability.name,
      skill_2: this._poke.abilities[1].ability.name,
      sprites: this._poke.sprites.front_default,
    };
    this.appendChild(itemElement);
  }
}

customElements.define("poke-list", PokeList);
