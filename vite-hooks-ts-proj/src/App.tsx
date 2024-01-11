import { useState, useEffect, useCallback, MouseEvent, useMemo, useRef } from 'react'

interface User {
  id: number;
  username: string;
}

type fibFunc = (n: number) => number

const fib: fibFunc = (n) => {
  if (n <= 1) return 1
  return fib(n - 1) + fib(n - 2)
}

const myNum: number = 37

const App = () => {
  const [count, setCount] = useState<number>(0)
  const [users, setUsers] = useState<User[] | null>(null)

  const inputRef = useRef<HTMLInputElement>(null)

  console.log(inputRef?.current)
  console.log(inputRef?.current?.value)

  useEffect(() => {
    console.log('mounting')
    console.log('Users: ', users)

    return () => console.log('unmounting')

  }, [])

  const addTwo = useCallback((e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>):void => setCount(prev => prev + 2), [])

  const result = useMemo<number>(() => fib(myNum), [myNum])

  return (
    <>
    <h1>{count}</h1>
    <button onClick={addTwo}>Add</button>
    <h1>{result}</h1>
    <input ref={inputRef} type="text" />
    </>
  )
}

export default App