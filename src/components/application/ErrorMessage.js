import React from 'react'
import {MdOutlineConstruction} from 'react-icons/md'
import {VscSmiley} from 'react-icons/vsc'
import DividerBot from '../utils/DividerBot'

const ErrorMessage = () => {
  return (
    <div className='error add-animation-pin-drop'>
      <div className='error__wrapper'>
        <h1 className='error__h1'>Coming Soon!</h1>
        
        <MdOutlineConstruction size={90}/>
        
        <p>Please, bear with us as we continue to improve this application</p>
        <div className='error__alignment'>
          <p className='error__paragraph'>Thankyou again for your patience </p>
          <VscSmiley />
        </div>
        
      </div>
      
    </div>
  )
}

export default ErrorMessage