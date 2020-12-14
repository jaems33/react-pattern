import React, {useState, useEffect, useRef} from 'react';
import Button from './Button';

// const inc = (c: number) => c + 1;

/*
  Local Storage hook to make it easier for components to save some information
  in localStorage without needing to define it on their own
*/
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

  /* Won't re-render in Strict Mode */
  const countRef = useRef();
  let lastState = 'none';
  if (countRef !== undefined){
    const num = countRef.current;
    if (num !== undefined && count < num){
      lastState = 'Higher';
    } else if (num !== undefined && count > num){
      lastState = 'Lower';
    }
  }
  countRef.current = count;

  const increment = () => {
    setCount((c: number) => {
      return c < max ? c + step : max;
    })
  }
  const decrement = () => setCount(count - step);
  const reset = () => setCount(0);

  useEffect(() => {
    document.title = `Counter: ${count}`;
    // A way to ensure that you clean up after eachrender so that you don't accumulate
    // a ton of intervals
    const id = setInterval(() => console.log(`${count}`), 1000);
    return () => clearInterval(id);
  }, [count]);

  return (
    <div>
      <p>{count}</p>
      <Button text="+" callback={increment} />
      <Button text="-" callback={decrement} />
      <Button text="reset" callback={reset} />
      <p>{lastState}</p>
    </div>
  )
}

export default Counter;