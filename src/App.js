import React, { Suspense }  from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { SearchResults, Detail, Login, Register } from 'pages'
import { GifsContextProvider } from 'Context/GifsContext'
import { UserContextProvider } from 'Context/UserContext'
import 'App.sass'

const HomePage = React.lazy(() => import('./pages/Home/Home'))

const App = () => {
  return (
    <Router>
      <Switch>
        <UserContextProvider>
          <div className="App">
            <Suspense fallback={null}>
              <section className="App-content">
                <GifsContextProvider>
                  <Route component={HomePage} path='/' exact />
                  <Route component={SearchResults} path='/search/:keyword/:rating?/:language?' />
                  <Route component={Detail} path='/gif/:id' />
                  <Route component={Login} path='/login' />
                  <Route component={Register} path='/register' />
                </GifsContextProvider>
                  <Route component={()=> <h1>404 ERROR</h1>} path='/404' />
              </section>
              </Suspense>
          </div>
        </UserContextProvider>
      </Switch>
    </Router>
  )
}
export default App