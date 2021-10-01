import React from 'react'
import { Switch } from 'react-router'
import { HashRouter, Route } from 'react-router-dom'

import { Home } from '../pages'

const Routes: React.FC = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </HashRouter>
  )
}

export default Routes
