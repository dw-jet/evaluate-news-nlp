import { insertResults } from '../src/client/js/insertResults'
const data = {polarity: "positive", polarity_confidence: 0.88}

test('dom nodes are updated as expected', () => {
  document.body.innerHTML = '<div id="results"></div>';
  insertResults(data);
  expect(document.getElementById('results').innerHTML).toBe(`<p>Polarity: ${data.polarity}</p> <p>Confidence: ${data.polarity_confidence.toFixed(2)}</p>`);
})
