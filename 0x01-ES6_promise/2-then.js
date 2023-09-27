export default function handleResponseFromAPI(promise) {
  const myPromise = { 
    status: 200, 
    body: 'success' 
  };

  return promise
    .then(() => myPromise)
    .catch(() => new Error())
    .finally(() => {
      console.log('Got a response from the API');
    });
}
