import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length ,setLength] = useState(6)
  const [numberAllowed ,setNumberAllowed] = useState(false);
  const [charAllowed ,setCharAllowed] = useState(false);
  const [password , setPassword] = useState("");

  // useRef
  const passwordRef = useRef(null)
  // password generator logic
  const passwordGenerator = useCallback(()=>{ //usecallback - store the function nd render multiple time
    let pass ="";
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed){ //str +=  "0123456789"
      str = str + "0123456789"
    } 
    if(charAllowed){ //str +=  "!@#$%^&*-_+=[]{}~`"
      str = str + "!@#$%^&*-_+=[]{}~`"
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass = pass + str.charAt(char);
    }

    setPassword(pass)
    
  },[length,numberAllowed,charAllowed,setPassword])
//end

  // fetch passwordvalue
  const copyPasswordToclipBoard = useCallback(()=>{
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,14)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])
  return (
    <>
      <div className='w-screen h-svh rounded-lg px-52 shadow-md text-orange-500 bg-slate-400 '><br />
        <h1 className='text-4xl text-center text-white'>Password Generator</h1><br />
        <div className='d-flex shadow-lg rounded-lg bg-slate-700 h-48 pt-2 px-3'>
            <p>enter Password</p>
            <input 
              type="text"
              value={password}
              className='outline-none rounded-lg w-full py-3 px-3 mt-2' 
              placeholder='password'
              readOnly
              ref={passwordRef}
              />
              <div className='flex text-sm gap-x-2 mt-6'>
              {/* copy button */}
              <button className='w-24 h-10 outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-orange-500' onClick={copyPasswordToclipBoard}>Copy</button>
                <div className='flex items-center gap-x-1'>
                  <input type="range" 
                    min={6}
                    max={15}
                    value={length}
                    className='cursor-pointer '
                    onChange={(e)=>{setLength(e.target.value)}}
                  />
                  <label>Length : {length}</label>
               </div>
               {/* number */}
               <div className='flex items-center gap-x-1'>
                <input type="checkbox"
                       defaultChecked={numberAllowed}
                       id="numberInput"
                       onChange={()=>{
                        setNumberAllowed((prev) => !prev);
                       }} />
                    <label htmlFor='numberInput'>Numbers</label>
               </div>
               {/* char*/}
               <div className='flex items-center gap-x-1'>
                <input type="checkbox"
                       defaultChecked={charAllowed}
                       id="characterInput"
                       onChange={()=>{
                        setCharAllowed((prev) => !prev); //call-callback value to acces prev value  || also chang value ture to false or false to true
                       }} />
                    <label htmlFor='characterInput'>Characters</label>
               </div>
             </div>
          </div>
      </div>
    </>
  )
}

export default App
