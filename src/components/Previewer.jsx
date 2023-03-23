import React from 'react'
import Icono from '/markdownOriginal.svg'
import fullScreen from '/fullscreen.svg'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import '../styles/previewer.scss'

const Previewer = (props) => {
  return (
    <div className='container-previewer'>
        <div className='bar-previewer'>
          <div className='left-bar'>
              <img src={Icono} alt="" />
              <div>Previewer</div>
          </div>
          <div><img className='right-image' src={fullScreen} alt="" /></div>
        </div>
        <div id='preview' className='scroll'>
          <ReactMarkdown children={props.textToMD} remarkPlugins={[remarkGfm]} linkTarget="_blank"></ReactMarkdown>
        </div>
    </div>
  )
}

export default Previewer