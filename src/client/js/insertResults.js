const insertResults = (data = {}) => {
  const resultDiv = document.getElementById('results');
  resultDiv.innerHTML = `<p>Polarity: ${data.polarity}</p> <p>Confidence: ${data.polarity_confidence.toFixed(2)}</p>`;
}

export { insertResults }