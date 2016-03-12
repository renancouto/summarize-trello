/**
 * dependencies
 */
import api from '../services/api'
import Reflux from 'reflux'

/**
 * actions
 */
const ListActions = Reflux.createActions({
  getCards: { children: [ 'completed', 'failed' ]}
})

ListActions.getCards.listen(function (id) {
  api(`lists/${id}?cards=all&board=true&board_fields=name`, this)
})

/**
 * public
 */
export default ListActions
