class PokeItem extends HTMLElement {
  set item(item) {
    this._item = item;
    this.render();
  }

  render() {
    this.innerHTML = `
        <style>
            .container img {
                padding: 5px;
                max-width: 350px;
            }

            .table td {
                padding: 0px;
            }

            .table td>img {
                padding: 0px;
            }

            .card{
                padding:0;
                border-radius:25px;
            }

            .card-body{
                padding:2px;
            }

            .card-header:first-child {
                border-radius: 25px 25px 0 0;
            }

            .card-title{
                margin:0;
                font-weight:bolder;
            }
        </style>

        <div class="container">
            <div class="card">
                <div class="card-header">
                    <h2 class="card-title">
                    ${this._item.name.toUpperCase()}
                    </h2>
                </div>

                <div class="card-body">
                    <div class="row-group">
                        <img src="https://pokeres.bastionbot.org/images/pokemon/${
                          this._item.id
                        }.png" alt="pokemon">
                    </div>
                    
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">1# Skills</th>
                                <th scope="col">2# Skills</th>
                                <th scope="col">Sprite</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th class="align-middle">${this._item.id}</th>
                                <td class="align-middle">${
                                  this._item.skill_1
                                }</td>
                                <td class="align-middle">${
                                  this._item.skill_2
                                }</td>
                                <td class="slim"><img src="${
                                  this._item.sprites
                                }"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        `;
  }
}

customElements.define("poke-item", PokeItem);
