/**
 * dependencies
 */
import React from 'react'
import { Link } from 'react-router'

/**
 * component
 */
const Header = (props) => (
  <header className='main-header'>
    <Link to='/'>Summarize Trello</Link>
    {props.children}
  </header>
)

/**
 * public
 */
export default Header
