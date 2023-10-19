import { createBrowserRouter } from 'react-router-dom'

import App from './App.jsx'
import { AuctionsPage } from './pages/AuctionsPage.jsx'

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: '',
          element: <div>Hello on my website...</div>
        },
        {
          path: '/auctions',
          element: <AuctionsPage />
        }
      ]
    }
  ])
  