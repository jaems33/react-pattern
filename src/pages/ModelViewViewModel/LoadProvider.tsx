import {useFetch} from './fetchReducer';
import Provider from './Provider';
const ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

const LoadProvider = (props: any) => {
  const [response, loading] = useFetch(ENDPOINT);
  
  const data = response == null ? [] : response;
  console.log('data', data);
  console.log('loading', loading);
  return (<>
  { 
    loading ? '' : <Provider data={data} /> 
  }
  </>)
}

export default LoadProvider;