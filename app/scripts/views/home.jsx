/**
 * dependencies
 */
import BoardsActions from '../actions/boardsActions'
import BoardsStore from '../stores/boardsStore'
import Boards from '../components/boards.jsx'
import React from 'react'

/**
 * component
 */
class Home extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      items: [],
      loading: false
    }
  }

  componentDidMount () {
    this.unsubscribe = BoardsStore.listen(this.onStatusChange.bind(this))
    BoardsActions.getBoards(localStorage.getItem('userId'))
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
        <h1>Your boards</h1>
        { this.state.error ? <p>{ this.state.error }</p> : '' }
        <Boards { ...this.state } />
      </div>
    )
  }
}

/**
 * public
 */
export default Home
