import './App.css'
import Card from './components/Card/Card'
import Message from './components/NestedComponent/Message'
import Person from './components/NestedComponent/Person'
// import { guns } from '../test'
import Basic from './components/Events/Basic'
import ArrayExamples from './components/Events/ArrayExamples'
import ObjectExample from './components/Events/ObjectExample'
import UseEffectExample from './components/Events/UseEffectExample'

function App() {



  // const myArr = guns.map(item => <p>{item.name}</p>)
  // console.log(myArr)

  return (
    <>
      {/* <Person></Person> */}
      {/* <div className='grid grid-cols-2 px-12'>
        {guns.map((item, index) => {
          console.log(index)
          return <Card {...item} key={index}></Card>
        })}
      </div> */}

    
    <Basic/>
    {/* <ArrayExamples/> */}
    {/* <ObjectExample/> */}
    <UseEffectExample/>
    </>
  )
}

export default App;
