import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './containers/App'
import Admin from './containers/Pages/Admin'
import CafeInfo from './components/DetailDishesInCafe'
import Main from './containers/Main'
import LoginPage from './containers/Pages/Login'
import NotFound from './containers/Pages/NotFound'
import EditDishes from './containers/Pages/EditDishes'

export const routes = (
    <div>
        <Route path='/' component={App}>
            <IndexRoute component={Main} />
            <Route path='/admin' component={Admin} onEnter={Admin.onEnter}/>
            <Route path='/cafeinfo/:cafeinfo' component={CafeInfo}/>
            <Route path='/edit/:edit' component={EditDishes}/>
            <Route path='/login' component={LoginPage} />
        </Route>
        <Route path='*' component={NotFound} />
    </div>
)