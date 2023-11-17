import React from 'react'
import { FaCircleHalfStroke } from "react-icons/fa6"
import "./header.css"
function Header({ changeMode ,mode}) {
  return (
    <header className='header'>
      <a href="#" className='logo'>
        <span>RT</span>LA <span>.</span>
      </a>

      <FaCircleHalfStroke
        className={mode ? "light-mode ": "dark-mode"}
        onClick={changeMode}
      />


    </header>
  )
}

export default Header