/**
 * get data from Trello's API with authorization wrapper
 * @param {string} url     [API url]
 * @param {Object} context [parent function context]
 */
const get = function (url, context) {
  Trello.get(url, context.completed, context.failed)
}

/**
 * public
 */
export default get
