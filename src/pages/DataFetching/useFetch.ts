import {useState, useEffect} from 'react';

/* 
  One solution for data fetching is to provide a hook that will do the
  handling and whose interface will only show the outcome.

  Accepts a callback function that will manipulate the received response data
  before passing it back to the caller.
*/

const defaultCallback = (response: any) => response;

export const useFetch = (url: string, dataCallback = defaultCallback) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null as any);

  useEffect(() => {
    setLoading(true);
    setResponse(null);
    setError(null);

    fetch(url)
      .then( (response) => response.json())
      .then( (response) => {
        setLoading(false);
        const output = dataCallback(response);
        setResponse(output);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
        console.error("Error loading");
      })
  }, [])

  return [response, loading, error];

}