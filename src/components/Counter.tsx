import React, {useState, useEffect} from 'react';
import Button from './Button';

// const inc = (c: number) => c + 1;

const useLocalStorage = <T extends unknown>(initialState: T, key: string) => {
  const get = (): any => {
    const storage = localStorage.getItem(key);
    if (storage && Object.keys(storage).length !== 0){
      return JSON.parse(storage).value;
    } 
    return initialState;
  }

  const [value, setValue] = useState(get());

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify({ value }));
  }, [value, key]);

  return [value, setValue];

}

const Counter: React.FunctionComponent<any> = ({ max, step }) => {
  const [count, setCount] = useLocalStorage<Number>(0, 'count');

  const increment = () => {
    /*
      count only increases by 1 because state updates are async and the updates are queued up
      but if you use a function, it'll increase n times because you're passing in a function
    */

    //setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(inc);
    setCount((c: number) => {
      return c < max ? c + step : max;
    })
  }
  const decrement = () => setCount(count - step);
  const reset = () => setCount(0);

  useEffect(() => {
    document.title = `Counter: ${count}`;
  }, [count]);

  return (
    <div>
      <p>{count}</p>
      <Button text="+" callback={increment} />
      <Button text="-" callback={decrement} />
      <Button text="reset" callback={reset} />
    </div>
  )
}

export default Counter;