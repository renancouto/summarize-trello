/**
 * dependencies
 */
import Cards from '../components/cards.jsx'
import ListActions from '../actions/listActions'
import ListStore from '../stores/listStore'
import React from 'react'

/**
 * List Class
 */
class List extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      data: {},
      loading: false
    }
  }

  componentDidMount () {
    this.unsubscribe = ListStore.listen(this.onStatusChange.bind(this))
    ListActions.getCards(this.props.params.id)
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  onStatusChange (state) {
    this.setState(state)
  }

  render () {
    return (
      <div>
        <h1>List: { this.state.data.name }</h1>
        <h2>Board: { this.state.data.board ? this.state.data.board.name : '' }</h2>
        <Cards { ...this.state } items={ this.state.data.cards } />
      </div>
    )
  }
}

/**
 * public
 */
export default List
