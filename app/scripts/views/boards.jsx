/**
 * dependencies
 */
import BoardsActions from '../actions/boardsActions'
import BoardsStore from '../stores/boardsStore'
import Lists from '../components/lists.jsx'
import React from 'react'

/**
 * Boards Class
 */
class Boards extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      data: {},
      loading: false
    }
  }

  componentDidMount () {
    this.unsubscribe = BoardsStore.listen(this.onStatusChange.bind(this))
    BoardsActions.getLists(this.props.params.id)
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
        <h1>Board: { this.state.data.name }</h1>
        <Lists { ...this.state } items={ this.state.data.lists } />
      </div>
    )
  }
}

/**
 * public
 */
export default Boards
