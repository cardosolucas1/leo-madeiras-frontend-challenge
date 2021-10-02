import React from 'react'
import { Switch } from 'react-router'
import { HashRouter, Route } from 'react-router-dom'

import { Home, Registers } from '../pages'

import PagesLayout from '../layout/Pages'

const Routes: React.FC = () => {
  return (
    <HashRouter>
      <Switch>
        <PagesLayout>
          <Route exact path="/" component={Home} />
          <Route exact path="/registers" component={Registers} />
        </PagesLayout>
      </Switch>
    </HashRouter>
  )
}

export default Routes
