import { useState } from 'react'

import './App.css'

function App() {

  const name  = 'Jonh Doe';
  let age = 30;
  let salary = 50000;

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Salary: ${salary}</p>
        <br />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
          onClick={() => {
            const [salary, setSalary] = useState(50000);
          }}>
          Salary Increase
        </button>
      </div>
    </>
  )
}

export default App
