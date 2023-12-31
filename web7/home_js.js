// let httpRequest;
const httpRequest = new XMLHttpRequest();
const url = 'https://books-api-rz6d.onrender.com/books';
document.getElementById('ajaxButton').addEventListener('click', () => {
  makeRequest(url);
});

function makeRequest(url) {
  httpRequest.onreadystatechange = alertContents;
  httpRequest.open('GET', url, true);
  httpRequest.setRequestHeader('Access-Control-Allow-Origin', '*');
  httpRequest.setRequestHeader('Content-type', 'application/json');
  httpRequest.send();
}

function alertContents() {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      const response = JSON.parse(httpRequest.responseText);
      response.map(
        (book) =>
          (document.getElementById(
            'bookList'
          ).innerHTML += 
`<div class="card" style="width: cover;">
      
      <div class="card-body" style="border:2px solid black;">
        <h3>${book.title}</h3>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="${book.link}" style="color:red;">book link</a>
      </div>
    </div>`)
      );
    } else {
      alert('There was a problem with the request.');
    }
  }
}

console.log('hello', httpRequest.responseText);