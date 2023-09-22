const httpRequest = new XMLHttpRequest();
const url = 'https://dog.ceo/api/breeds/image/random';
document.getElementById('fetch').addEventListener('click', () => {
  makerequest(url);
});

function makerequest(url) {
  httpRequest.onreadystatechange = alertcontents;
  httpRequest.open('GET', url, true);
  httpRequest.send();
}

function alertcontents() {
  if (httpRequest.readyState == XMLHttpRequest.DONE) {
    if (httpRequest.status == 200) {
      const response = JSON.parse(httpRequest.responseText);
      console.log(response.message)
      document.getElementById('ij').innerHTML = `<img src=${response.message} alt="jacket" width="500" height="600">`;
        }
}
}
console.log('hello', httpRequest.responseText);