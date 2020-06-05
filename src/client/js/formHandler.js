function handleSubmit(event) {
  event.preventDefault()

  const urlInput = document.getElementById('article-url');
  const resultDiv = document.getElementById('results');
  const inputUrl = document.getElementById('article-url');
  const formText = inputUrl.value;
  const inputValid = inputUrl.checkValidity();

  urlInput.classList.remove('invalid-input');
  resultDiv.classList.remove('invalid-text');

  inputUrl.value = "";
  resultDiv.innerHTML = "";

  if (inputValid) {
    Client.postData('http://localhost:3030/sentiment', { url: formText})
    .then(Client.getHandler('http://localhost:3030/sentiment'))
  } else {
    const resultDiv = document.getElementById('results');
    urlInput.classList.add('invalid-input');
    resultDiv.classList.add('invalid-text');
    resultDiv.innerHTML = `<p>${formText} isn't a valid URL. Try to copy and paste the whole URL starting with http:// or https://</p>`;
  }
}

export { handleSubmit }