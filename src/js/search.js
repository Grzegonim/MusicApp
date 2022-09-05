import { templates } from './settings.js';

class Search{
  constructor(element, data){
    const thisSearch = this;
    thisSearch.searchSong(element, data);
  }
  searchSong(element, data){
    const thisSearch = this;
    const searchButton = document.querySelector('.btn-search');
    const searchInput = document.querySelector('.search-input');
    searchButton.addEventListener('click', function(){
      const generatedHTMLclear = templates;
      thisSearch.dom = {};
      thisSearch.dom.wrapper = element;
      thisSearch.dom.wrapper.innerHTML = generatedHTMLclear;

      for(let song of data){
        if(song.title.toLowerCase().includes(searchInput.value.toLowerCase()) || song.author.toLowerCase().includes(searchInput.value.toLowerCase())){
          const generatedHTML = templates.searchPage(song);
          thisSearch.dom = {};
          thisSearch.dom.wrapper = element;
          thisSearch.dom.wrapper.innerHTML += generatedHTML;
        } 
      }
      /* eslint-disable */
      GreenAudioPlayer.init({
        selector: '.player-search', // inits Green Audio Player on each audio container that has class "player"
        stopOthersOnPlay: true
      });
    });
  }
}

export default Search;