/**
 * dependencies
 */
import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

/**
 * views
 */
import App from './views/app.jsx'
import Home from './views/home.jsx'
import Boards from './views/boards.jsx'
import List from './views/list.jsx'
import NotFound from './views/notFound.jsx'

/**
 * routes
 */
const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={ App }>
      <IndexRoute component={ Home }/>
      <Route path='home' component={ Home } />
      <Route path='&token=*' component={ Home } />
      <Route path='boards/:id' component={ Boards } />
      <Route path='board/:boardId/list/:id' component={ List } />
      <Route path='*' component={ NotFound }/>
    </Route>
  </Router>
)

/**
 * public
 */
export default routes
