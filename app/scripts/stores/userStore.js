/**
 * dependencies
 */
import Reflux from 'reflux'
import UserActions from '../actions/userActions'

/**
 * actions
 */
const UserStore = Reflux.createStore({
  listenables: UserActions,

  init () {
    this.data = {}
  },

  getData () {
    this.trigger({
      loading: true
    })
  },

  getDataCompleted (data) {
    localStorage.setItem('userId', data.id)
    this.data = data
    this.trigger({
      data: this.data,
      loading: false
    })
  },

  getDataFailed () {
    this.trigger({
      error: 'Error getting user info',
      loading: false
    })
  }
})

/**
 * public
 */
export default UserStore
