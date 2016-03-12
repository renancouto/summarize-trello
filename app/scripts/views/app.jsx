/**
 * dependencies
 */
import Header from '../components/header.jsx'
import React from 'react'
import User from '../components/user.jsx'
import UserActions from '../actions/userActions'
import UserStore from '../stores/userStore'

/**
 * App Class
 */
class App extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      loading: true
    }
  }

  componentDidMount () {
    this.unsubscribe = UserStore.listen(this.onStatusChange.bind(this))
    UserActions.getData()
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  onStatusChange (state) {
    this.setState(state)
  }

  render () {
    const data = this.state.data

    return (
      <div>
        <Header>
          { data ? <User { ...data } /> : null }
        </Header>
        <main>
          { data ? this.props.children : 'Loading' }
        </main>
      </div>
    )
  }
}

/**
 * public
 */
export default App
