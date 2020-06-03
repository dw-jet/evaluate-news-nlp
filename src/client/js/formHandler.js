function handleSubmit(event) {
  event.preventDefault()
  const resultDiv = document.getElementById('result');
  // check what text was put into the form field
  let formText = document.getElementById('name').value

  Client.postData('http://localhost:3030/sentiment', { url: formText})
  .then(Client.getHandler('http://localhost:3030/sentiment'))
}

export { handleSubmit }