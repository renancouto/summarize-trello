/**
 * dependencies
 */
import React from 'react'

const Cards = (props) => {
  const loading = props.loading ? <div className="loading-label">Loading cards...</div> : 'Cards'
  const items = props.items ? props.items.map((item) =>
    <li key={ item.id } >
      { item.name }
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

Cards.propTypes = {
  loading: React.PropTypes.bool,
  items: React.PropTypes.array
}

/**
 * public
 */
export default Cards
