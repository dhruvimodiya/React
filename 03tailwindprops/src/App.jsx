import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
    <h4>tailwind css and props</h4>
    <Card username="dhruvi" age='22'/><br /><br />
      <h1 className='bg-green-400 text-black p-4 rounded-xl  '>Tailwind Test</h1>

      <br /> <br />
      <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img className="w-50 h-50 rounded-full mx-auto bg-slate-300" src="https://images.unsplash.com/photo-1664574652984-5b5f769bef07?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" width="384" height="512"/>
        <div className="pt-6 space-y-4">
            <blockquote>
              <p className="text-lg font-medium">
                 “Tailwind CSS is the only framework that I've seen scale
                 on large teams. It’s easy to customize, adapts to any design,
                 and the build size is tiny.”
              </p>
            </blockquote>
            <figcaption>
                <div>
                  Sarah Dayan
                </div>
                <div>
                  Staff Engineer, Algolia
                </div>
            </figcaption>
        </div>
      </figure>
    </>
  )
}

export default App
