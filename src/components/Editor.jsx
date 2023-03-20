import React from 'react'
import Icono from '/markdownOriginal.svg'
import fullScreen from '/fullscreen.svg'
import { setText } from '../reducer/textSlice'

const Editor = (props) => {
  return (
    <div>
        <div>
          <div>
            <img src={Icono} alt="" />
            <span>Editor</span>
          </div>
          <div><img src={fullScreen} alt="" /></div>
        </div>
        <textarea onChange={
          (event)=>{
            props.updater(setText({
              text: event.target.value
            }))
          }
        }  id="editor" value={props.textDefault}></textarea>
    </div>
  )
}

export default Editor