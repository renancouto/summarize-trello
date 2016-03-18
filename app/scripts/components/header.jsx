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
    <div className='main-header__logo'><Link to='/'>Summarize Trello</Link></div>
    <div className='main-header__user'>{props.children}</div>
  </header>
)

/**
 * public
 */
export default Header
