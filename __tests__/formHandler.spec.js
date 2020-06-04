import { handleSubmit } from '../src/client/js/formHandler'
const event = {
  preventDefault: () => {}
}

test("Non URL doesn't post", () => {
  document.body.innerHTML = '<input id="article-url" type="text" value="not.a.url" pattern="https?://.+"><div id="results"></div>';
  handleSubmit(event);
  expect(document.getElementById('results').innerHTML).toBe(`<p>not.a.url isn't a valid URL. Try to copy and paste the whole URL starting with http:// or https://</p>`)
})