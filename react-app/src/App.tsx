import { useState } from 'react'

import './App.css'

function NumberButton({bValue}:{bValue:number}) {
  return (
    <button className='px-6 py-2 bg-gray-400 hover:bg-gray-500 text-white'> {bValue} </button>
  )
}

function App() {

  const [value, setValue] = useState(0)


  return (
    <>
      <div className="app-container">
        <div className='align-center justify-center flex flex-col gap-4'>{value}</div>
        <NumberButton bValue={1} />
        <NumberButton bValue={2} />
        <NumberButton bValue={3} /><br />
        <NumberButton bValue={4} />
        <NumberButton bValue={5} />
        <NumberButton bValue={6} /><br />
        <NumberButton bValue={7} />
        <NumberButton bValue={8} />
        <NumberButton bValue={9} />

        <br />
        <button className='px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors' 
        onClick={() => setValue(value + 1)}>Add</button>
        <button className='px-6 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-colors' 
        onClick={() => setValue(value - 1)}>Subtract</button>
      </div>
    </>
  )
}

export default App
