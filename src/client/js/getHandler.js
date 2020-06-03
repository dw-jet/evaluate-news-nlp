const getHandler = async (url='') => {
  const request = await fetch(url);
  try {
    const data = await request.json();
    Client.insertResults(data)
  }
  catch(error) {
    console.log("error", error);
  }
}

export { getHandler }