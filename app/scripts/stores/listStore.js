/**
 * dependencies
 */
import Reflux from 'reflux'
import ListActions from '../actions/listActions'

/**
 * actions
 */
const ListStore = Reflux.createStore({
  listenables: ListActions,

  init () {
    this.data = {}
    this.board = {}
  },

  getCards () {
    this.trigger({
      loading: true
    })
  },

  getCardsCompleted (data) {
    this.data = data
    this.trigger({
      data: this.data,
      loading: false
    })
  }
})

/**
 * public
 */
export default ListStore
