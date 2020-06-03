const regeneratorRuntime = require('regenerator-runtime');

const postData = async (url, data={}) => {
  if (!url) { throw 'URL is missing'; }
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  try {
    const newData = await response.json();
    return newData;
  }
  catch(error) {
    console.log('error', error);
  }
}

export { postData }