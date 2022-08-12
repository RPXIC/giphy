import { Suspense, lazy } from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { SearchResults, Detail, Login, Register, Error } from 'pages'
import { GifsContextProvider } from 'Context/GifsContext'
import { UserContextProvider } from 'Context/UserContext'
import 'App.sass'

const HomePage = lazy(() => import('./pages/Home/Home'))

const App = () => (
  <BrowserRouter>
    <UserContextProvider>
      <div className='App'>
        <Suspense fallback={null}>
          <section className='App-content'>
            <GifsContextProvider>
              <Routes>
                <Route element={<HomePage />} exact path='/' />
                <Route element={<SearchResults />} path='/search'>
                  <Route element={<SearchResults />} path=':keyword'>
                    <Route element={<SearchResults />} path=':rating'>
                      <Route element={<SearchResults />} path=':language' />
                    </Route>
                  </Route>
                </Route>
                <Route element={<Detail />} exact path='/gif/:id' />
                <Route element={<Login />} exact path='/login' />
                <Route element={<Register />} exact path='/register' />
                <Route element={<Error />} />
              </Routes>
            </GifsContextProvider>
          </section>
        </Suspense>
      </div>
    </UserContextProvider>
  </BrowserRouter>
)

export default App
