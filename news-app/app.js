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
    topHedline(counrty = 'ua', cb) {
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



//  init selects
document.addEventListener('DOMContentLoaded', function() {
  M.AutoInit();
  loadNews();
});

//Load News function

function loadNews() {
  newsService.topHedline('ua', onGetResponce);
}

// function fro getting response for server

function onGetResponce(err, res) {
  renderNews(res.articles);
}

//function render news

function renderNews(news) {
  const newsContainer = document.querySelector('.news-container .row');

  news.forEach(newsItem => {
    const el = newsTemplate(newsItem);
  });
}

// news Item template function 

function newsTemplate({ urlToImage, title, url, description }) {
  console.log(news);

  return `
  <div class="col s12">
    <div class="card">
      <div class="card-image">
        <img src=${urlToImage}>
        <span class="card-title">${title || ''}<span>
      </div>
    </div>
  </div>
  `
}