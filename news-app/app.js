// jshint esversion: 6
// Custom Http Module
function customHttp() {
  return {
    get(url, cb) {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.addEventListener('load', () => {
          if (Math.floor(xhr.status / 100) !== 2) {
            cb(`Error. Status code: ${xhr.status}`, xhr);
            return;
          }
          const response = JSON.parse(xhr.responseText);
          cb(null, response);
        });

        xhr.addEventListener('error', () => {
          cb(`Error. Status code: ${xhr.status}`, xhr);
        });

        xhr.send();
      } catch (error) {
        cb(error);
      }
    },
    post(url, body, headers, cb) {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.addEventListener('load', () => {
          if (Math.floor(xhr.status / 100) !== 2) {
            cb(`Error. Status code: ${xhr.status}`, xhr);
            return;
          }
          const response = JSON.parse(xhr.responseText);
          cb(null, response);
        });

        xhr.addEventListener('error', () => {
          cb(`Error. Status code: ${xhr.status}`, xhr);
        });

        if (headers) {
          Object.entries(headers).forEach(([key, value]) => {
            xhr.setRequestHeader(key, value);
          });
        }

        xhr.send(JSON.stringify(body));
      } catch (error) {
        cb(error);
      }
    },
  };
}
// Init http module
const http = customHttp();

const newsService = (function(){
  const apiKey = 'c4f7a716ee7f49bd93967a2c730fcfe2';
  const apiUrl = 'https://newsapi.org/v2';

  return {
    topHedline(counrty = 'ru', cb) {
      http.get(
        `${apiUrl}/top-headlines?country=${counrty}&apiKey=${apiKey}`,
        cb
        );
    },
    everything(query, cb) {
      http.get(`${apiUrl}/everything?q=${query}&apiKey=${apiKey}`,
      cb);
    }
  };

})();


//Elements

const form = document.forms['newsControls'];
const countrySelect = form.elements['country'];
const searchInput = form.elements['search'];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  loadNews();
});


//  init selects
document.addEventListener('DOMContentLoaded', function() {
  M.AutoInit(); // инит селектов чтобы они выглядели как в materialize
});

//Load News function

function loadNews() {
  showLoader();
  const country = countrySelect.value;
  const searchText = searchInput.value;
  if(!searchText) {
    newsService.topHedline(country, onGetResponce);
  } else {
    newsService.everything(searchText, onGetResponce);
  }
  searchInput.value = '';
}

// function fro getting response for server

function onGetResponce(err, res) {
  removePreloader();
  if(err) {
    showAlert(err, 'error-msg');
    return;
  }
  if(!res.articles.length) {
    //show empty message
    return;
  }

  renderNews(res.articles);
}

//function render news

function renderNews(news) {
  const newsContainer = document.querySelector('.grid-container');

  if(newsContainer.children.length) {
    clearContainer(newsContainer);
  }

  let fragment = '';
  news.forEach(newsItem => {
    const el = newsTemplate(newsItem);
    fragment += el;
  });
  newsContainer.insertAdjacentHTML('afterbegin', fragment);
}

// news Item template function 

function newsTemplate({ urlToImage, title, url, description }) {
  return `
  <div class="col s12">
    <div class="card">
      <div class="card-image">
        <img src=${urlToImage}>
        <span class="card-title">${title || ''}<span>
      </div>
      <div class="card-content">
        <p>${description || ''}</p>
      </div>
      <div class="card-action">
      <a href="${url}">Read more</a>
    </div>
    </div>
  </div>
  `;
}

function showAlert(msg, type = 'success') {
  M.toast({html: msg, classes: type});
}

function clearContainer(container) {

  let child = container.lastElementChild;

  while(child) {
    container.removeChild(child);
    child = container.lastElementChild;
  }
}

function showLoader() {
  document.body.insertAdjacentHTML('afterbegin',
  `  <div class="progress">
  <div class="indeterminate"></div>
</div>`
  );
}

function removePreloader() {
  const loader = document.querySelector('.progress');
  if(loader) {
    loader.remove();
  }
}