import { useState } from "react"
import "./App.css"

type ButtonProps = {
  label: string
  onClick: () => void
  className?: string
}

function CalcButton({ label, onClick, className = "" }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 bg-gray-400 hover:bg-gray-500 text-white font-semibold rounded ${className}`}
    >
      {label}
    </button>
  )
}

export default function App() {
  const [display, setDisplay] = useState("")

  const appendValue = (val: string) => {
    setDisplay(prev => prev + val)
  }

  const calculate = () => {
    try {
      setDisplay(eval(display).toString())
    } catch {
      setDisplay("Error")
    }
  }

  const clear = () => setDisplay("")

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-300">
      <div className="bg-yellow-200 p-6 rounded-xl shadow-lg w-72">
        
        {/* Display */}
        <div className="bg-black text-white text-right p-3 mb-4 rounded text-xl">
          {display || "0"}
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-2">
          <CalcButton label="7" onClick={() => appendValue("7")} />
          <CalcButton label="8" onClick={() => appendValue("8")} />
          <CalcButton label="9" onClick={() => appendValue("9")} />
          <CalcButton label="÷" onClick={() => appendValue("/")} className="bg-orange-500 hover:bg-orange-600" />

          <CalcButton label="4" onClick={() => appendValue("4")} />
          <CalcButton label="5" onClick={() => appendValue("5")} />
          <CalcButton label="6" onClick={() => appendValue("6")} />
          <CalcButton label="×" onClick={() => appendValue("*")} className="bg-orange-500 hover:bg-orange-600" />

          <CalcButton label="1" onClick={() => appendValue("1")} />
          <CalcButton label="2" onClick={() => appendValue("2")} />
          <CalcButton label="3" onClick={() => appendValue("3")} />
          <CalcButton label="+" onClick={() => appendValue("+")} className="bg-orange-500 hover:bg-orange-600" />

          <CalcButton label="C" onClick={clear} className="bg-red-500 hover:bg-red-600" />
          <CalcButton label="0" onClick={() => appendValue("0")} />
          
          <CalcButton label="=" onClick={calculate} className="bg-green-500 hover:bg-green-600" />
          <CalcButton label="−" onClick={() => appendValue("-")} className="bg-orange-500 hover:bg-orange-600" />
        </div>
      </div>
    </div>
  )
}
