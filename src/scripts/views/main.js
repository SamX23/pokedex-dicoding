import Database from "../data/dataProcessing.js";
import "../component/search.js";
import "../component/poke-list.js";

const main = () => {
  const searchItem = document.querySelector("search-widget");
  const itemList = document.querySelector("poke-list");

  const onButtonSearchClicked = async () => {
    try {
      let result = await Database.getPokemon(searchItem.value);
      renderItem(result);
    } catch (e) {
      console.log(e);
      fallbackResult();
    }
  };

  const renderItem = (keyword) => (itemList.poke = keyword);
  const fallbackResult = () => itemList.renderError();

  searchItem.clickEvent = onButtonSearchClicked;
};

export default main;
