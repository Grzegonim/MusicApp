export const select = {
  templateOf: {
    homepage: '#template-home',
    search: '#template-search',
    discovery: '#template-discovery',
  },
  containerOf: {
    home: '.home-wrapper',
    search: '.search-wrapper',
    discovery: '.discovery-wrapper',
    pages: '#pages',
  },
  all: {
    navigation: '.nav-btn a',
  },
};

export const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
    songs: 'songs',
  },
};

export const templates = {
  homepage: Handlebars.compile(document.querySelector(select.templateOf.homepage).innerHTML),
  searchPage: Handlebars.compile(document.querySelector(select.templateOf.search).innerHTML),
  discoveryPage: Handlebars.compile(document.querySelector(select.templateOf.discovery).innerHTML),
};

export const classNames = {
  active: 'active',
};