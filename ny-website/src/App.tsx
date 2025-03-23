import HomePage from './pages/HomePage';
import EnergyAndEmissionsPage from './pages/EnergyAndEmissionsPage';
import NotFoundPage from './pages/NotFoundPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from "./components/Layout";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "energy", element: <EnergyAndEmissionsPage />}
    ]
  },
]);

function App() {
  return (
  <div className="app">
    <RouterProvider router={router} />
  </div>
  )
}

export default App
