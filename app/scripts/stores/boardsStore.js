/**
 * dependencies
 */
import Reflux from 'reflux'
import BoardsActions from '../actions/boardsActions'
import ListActions from '../actions/listActions'

/**
 * actions
 */
const BoardStore = Reflux.createStore({
  listenables: [ BoardsActions, ListActions ],

  init () {
    this.items = []
    this.data = {}
    this.board = {}
  },

  getBoards () {
    this.trigger({
      loading: true
    })
  },

  getBoardsCompleted (data) {
    this.items = data
    this.trigger({
      items: this.items,
      loading: false
    })
  },

  getBoardsFailed () {
    this.trigger({
      error: 'Failed to get boards',
      loading: false
    })
  },

  getLists () {
    this.trigger({
      loading: true
    })
  },

  getListsCompleted (data) {
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
export default BoardStore
