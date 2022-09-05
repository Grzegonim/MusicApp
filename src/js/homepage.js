import { templates } from './settings.js';

class Homepage{
  constructor(element, data){
    const thisHome = this;
    thisHome.render(element, data);
  }

  render(element, data){
    /* eslint-disable */
    const thisHome = this;
    thisHome.songs = data;
    const generatedHTML = templates;
    thisHome.dom = {};
    thisHome.dom.wrapper = element;
    thisHome.dom.wrapper.innerHTML = generatedHTML;

    for(let song of data){
        const generatedHTML = templates.homepage(song);
        thisHome.dom = {};
        thisHome.dom.wrapper = element;
        thisHome.dom.wrapper.innerHTML += generatedHTML;
    }

    GreenAudioPlayer.init({
      selector: '.player-homepage', // inits Green Audio Player on each audio container that has class "player"
      stopOthersOnPlay: true
    });
  }
}

export default Homepage;