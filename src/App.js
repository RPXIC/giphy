import React, { Suspense }  from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { SearchResults, Detail, Login, Register, Error } from 'pages'
import { GifsContextProvider } from 'Context/GifsContext'
import { UserContextProvider } from 'Context/UserContext'
import 'App.sass'

const HomePage = React.lazy(() => import('./pages/Home/Home'))

const App = () => {
  return (
    <Router>
      <UserContextProvider>
        <div className="App">
          <Suspense fallback={null}>
            <section className="App-content">
              <GifsContextProvider>
                <Switch>
                  <Route component={HomePage} exact path='/' />
                  <Route component={SearchResults} exact path='/search/:keyword/:rating?/:language?' />
                  <Route component={Detail} exact path='/gif/:id' />
                  <Route component={Login} exact path='/login' />
                  <Route component={Register} exact path='/register' />
                  <Route component={Error} />
                </Switch>
              </GifsContextProvider>
            </section>
            </Suspense>
        </div>
      </UserContextProvider>
    </Router>
  )
}
export default App