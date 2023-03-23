import React from 'react'
import Icono from '/markdownOriginal.svg'
import fullScreen from '/fullscreen.svg'
import { setText } from '../reducer/textSlice'
import '../styles/editor.scss'

const Editor = (props) => {
  return (
    <div className='container-editor'>
        <div className='bar-editor'>
          <div className='left-bar'>
            <img src={Icono} alt="" />
            <span>Editor</span>
          </div>
          <div><img className="right-image" src={fullScreen} alt="" /></div>
        </div>
        <textarea onChange={
          (event)=>{
            props.updater(setText({
              text: event.target.value
            }))
          }
        }  id="editor" className='scroll' value={props.textDefault}></textarea>
    </div>
  )
}

export default Editor