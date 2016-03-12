/**
 * authorize user on Trello
 * @param {Object} callbacks [completed / failed callbacks]
 */
const authorize = function (callbacks) {
  Trello.authorize({
    name: 'Summarize Trello',
    expiration: 'never',
    success: callbacks.completed,
    error: callbacks.failed
  })
}

/**
 * public
 */
export default authorize
