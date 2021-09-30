import React from 'react'
import { Switch } from 'react-router'
import { HashRouter, Route } from 'react-router-dom'

import { Dev } from '../pages'

const Routes: React.FC = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/dev" component={Dev} />
      </Switch>
    </HashRouter>
  )
}

export default Routes
