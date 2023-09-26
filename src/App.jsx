import { useState } from 'react'
import SectionDescription from './components/SectionDescription'
import SectionVideo from './components/SectionVideo'
function App() {

  return (
    <>
      <div className='max-w-screen-xl m-auto mt-10 
      '>
      <div className='grid 
      grid-cols-1
      gap-10
      md:grid-cols-2'>
        <SectionVideo/>
        <SectionDescription/>
      </div>
      </div>
    </>
  )
}

export default App
