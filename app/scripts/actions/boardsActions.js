/**
 * dependencies
 */
import api from '../services/api'
import Reflux from 'reflux'

/**
 * actions
 */
const BoardActions = Reflux.createActions({
  getBoards: { children: [ 'completed', 'failed' ]},
  getLists: { children: [ 'completed', 'failed' ]}
})

/**
 * get user's boards
 */
BoardActions.getBoards.listen(function (id) {
  api(`members/${id}/boards`, this)
})

/**
 * get board's lists
 */
BoardActions.getLists.listen(function (id) {
  api(`boards/${id}?lists=all`, this)
})

/**
 * public
 */
export default BoardActions
