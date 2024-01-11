import {useState} from 'react'
import Heading from './components/Heading'
import Section from './components/Section'
import Counter from './components/Counter'
import List from './components/List'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
    <Heading title="Hello, world!" />
    <Section>This is my paragraph text.</Section>
    <Counter setCount={setCount}> Count is {count} </Counter>
    <List items={['a', 'b', 'c']} render={(item: string) => <span className='bold'>{item}</span>} />
  </>
  )
}

export default App
