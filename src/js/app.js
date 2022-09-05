import Homepage from './homepage.js';
import Search from './search.js';
import Discovery from './discovery.js';
import { settings, select, classNames } from './settings.js';

const app = {
  initData: function() {
    const url = settings.db.url + '/' + settings.db.songs;
    const homepageContainer = document.querySelector(select.containerOf.home);
    const searchPageContainer = document.querySelector(select.containerOf.search);
    const discoveryPageContainer = document.querySelector(select.containerOf.discovery);
    fetch(url)
      .then(function(rawResponse){
        return rawResponse.json();
      })
      .then(function(parsedResponse){
        new Homepage(homepageContainer, parsedResponse);
        new Search(searchPageContainer, parsedResponse);
        new Discovery(discoveryPageContainer, parsedResponse);
      });
      
  },
  initHomepage: function(){
    //const homepageContainer = document.querySelector(select.containerOf.home);
    //new Homepage(homepageContainer, this.data);
  },

  initSearchpage: function(){
    //const searchPageContainer = document.querySelector(select.containerOf.search);
    //new Search(searchPageContainer);
  },

  initDiscoverypage: function(){
    //const discoveryPageContainer = document.querySelector(select.containerOf.discovery);
    //new Discovery(discoveryPageContainer);
  },

  initPage: function(){
    const thisApp = this;
    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.all.navigation);
    const idFromHash = window.location.hash.replace('#/', '');
    let pageMatchingHash = thisApp.pages[0].id;
    for(let page of thisApp.pages){
      if(page.id == idFromHash){
        pageMatchingHash = page.id;
        break;
      }
    }

    thisApp.activePage(pageMatchingHash);

    for(let link of thisApp.navLinks){
      link.addEventListener('click', function(event){
        const clickedElement = this;
        event.preventDefault();

        const id = clickedElement.getAttribute('href').replace('#', '');
        thisApp.activePage(id);
        window.location.hash = '#/' + id;
      });
    }
  },

  activePage: function(pageId){
    const thisApp = this;
    for(let page of thisApp.pages){
      page.classList.toggle(classNames.active, page.id == pageId);
    }

    for(let link of thisApp.navLinks){
      link.classList.toggle(
        classNames.active,
        link.getAttribute('href') == '#' + pageId
      );
    }
  },

  textUC(){
    const elementsToUpperCase = document.querySelectorAll('.btn');
    for(let element of elementsToUpperCase){
      const text = element.innerHTML;
      element.innerHTML = text.toUpperCase();
    }
  },

  init: function() {
    const thisApp = this;
    thisApp.initData();
    thisApp.initHomepage();
    thisApp.initSearchpage();
    thisApp.initDiscoverypage();
    thisApp.initPage();
    thisApp.textUC();
  },
};

app.init();