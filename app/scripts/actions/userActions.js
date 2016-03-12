/**
 * dependencies
 */
import api from '../services/api'
import authorize from '../services/authorize'
import Reflux from 'reflux'

/**
 * actions
 */
const UserActions = Reflux.createActions({
  getData: { children: [ 'completed', 'failed' ]}
})

/**
 * get user's data
 */
UserActions.getData.listen(function () {
  const self = this

  authorize({
    failed: this.failed,
    // completed: (data) => api(`members/${data.idMember}/boards`, this)
    completed: () =>
      api(`tokens/${localStorage.getItem('trello_token')}`, {
        completed (data) { api(`members/${data.idMember}`, self) },
        failed: this.failed
      })
  })
})

/**
 * public
 */
export default UserActions
