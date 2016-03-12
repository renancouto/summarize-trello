/**
 * dependencies
 */
import React from 'react'
import { Link } from 'react-router'

const Boards = (props) => {
  const loading = props.loading ? <div className="loading-label">Loading boards...</div> : ''
  const items = props.items.map((item) =>
    <li key={ item.id } >
      <Link to={ `/boards/${item.id}` }>{ item.name }</Link>
    </li>
  )

  return (
    <div>
      {loading}
      <ul>
        {items}
      </ul>
    </div>
  )
}

Boards.propTypes = {
  loading: React.PropTypes.bool,
  items: React.PropTypes.array
}

/**
 * public
 */
export default Boards
