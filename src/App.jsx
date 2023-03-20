import React from 'react'
import Description from './components/Description'
import Editor from './components/Editor'
import Navbar from './components/Navbar'
import Previewer from './components/Previewer'
import { useSelector, useDispatch } from 'react-redux'

const App = () => {
  const dispatch= useDispatch();
  const  { text }  = useSelector(state => state.textInput);
  return (
    <>
      <Navbar/>
      <Description/>
      <div className='main'>
        <Editor updater={dispatch} textDefault={text}/>
        <Previewer textToMD={text}/>
      </div>
    </>
  )
}

export default App