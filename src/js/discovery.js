import { templates } from './settings.js';

class Discovery{
  constructor(element, data){
    const thisDiscovery = this;
    const discoveryBtn = document.querySelector('[href="#discovery"]');
    discoveryBtn.addEventListener('click', function(){
      thisDiscovery.render(element, data);    });
  }
  render(element, data){
    const thisDiscovery = this;
    const generateHTML = templates;
    thisDiscovery.dom = {};
    thisDiscovery.dom.wrapper = element;
    thisDiscovery.dom.wrapper.innerHTML = generateHTML;
    const randomSong = Math.floor(Math.random() * data.length) + 1;
    for(let song of data){
      if(song.id == randomSong){
        const generateHTML = templates.discoveryPage(song);
        thisDiscovery.dom = {};
        thisDiscovery.dom.wrapper = element;
        thisDiscovery.dom.wrapper.innerHTML = generateHTML;
      }        
    }
    /* eslint-disable */
    GreenAudioPlayer.init({
      selector: '.player', // inits Green Audio Player on each audio container that has class "player"
      stopOthersOnPlay: true
    });
  }
}

export default Discovery;