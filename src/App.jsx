import Header from './component/Header'
import { Provider } from 'react-redux'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Test from './pages/test'
import store from './store/Store'

const Layout = () => {
  return (
    <div>

      <Header />
      <Outlet />
    </div>
  )
}

const router = createBrowserRouter([{
  path: '/',
  element: <Layout />,
  children: [{
    path: '/',
    element: <Home />
  }, {
    path: '/cart',
    element: <Cart />
  }, {
    path: "/test",
    element: <Test />
  }
  ]
}])



function App() {


  return (
    <>
      <div>
        <Provider store={store}>
          <RouterProvider router={router}></RouterProvider>
        </Provider>

      </div>
    </>
  )
}

export default App
