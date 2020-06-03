const regeneratorRuntime = require('regenerator-runtime');

const getHandler = async (url) => {
  if (!url) { throw 'URL is missing'; }
  const request = await fetch(url);
  try {
    const data = await request.json();
    Client.insertResults(data);
  }
  catch(error) {
    console.log("error", error);
  }
}

export { getHandler }