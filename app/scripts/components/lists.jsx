/**
 * dependencies
 */
import React from 'react'
import { Link } from 'react-router'

const Lists = (props) => {
  const loading = props.loading ? <div className="loading-label">Loading lists...</div> : 'Lists'
  const items = props.items ? props.items.map((item) =>
    <li key={ item.id } >
      <Link to={ `/board/${props.data.id}/list/${item.id}` }>{ item.name }</Link>
    </li>
  ) : ''

  return (
    <div>
      {loading}
      { !props.loading && props.items && props.items.length ?
      <ul>
        {items}
      </ul>
      : 'no' }
    </div>
  )
}

Lists.propTypes = {
  loading: React.PropTypes.bool,
  items: React.PropTypes.array
}

/**
 * public
 */
export default Lists
