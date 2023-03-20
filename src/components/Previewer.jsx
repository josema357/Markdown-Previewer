import React from 'react'
import Icono from '/markdownOriginal.svg'
import fullScreen from '/fullscreen.svg'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const Previewer = (props) => {
  return (
    <div>
        <div>
          <div>
              <img src={Icono} alt="" />
              <div>Previewer</div>
          </div>
          <div><img src={fullScreen} alt="" /></div>
        </div>
        <div id='preview'>
          <ReactMarkdown children={props.textToMD} remarkPlugins={[remarkGfm]}></ReactMarkdown>
        </div>
    </div>
  )
}

export default Previewer