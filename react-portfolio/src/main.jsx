import ReactDOM from 'react-dom/client'
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import 'bootstrap/dist/css/bootstrap.min.css'
import '@picocss/pico/css/pico.min.css';
import './assets/styles.css';

// Import pages
import App from './App';
import Error from './pages/Error';
import Home from './pages/HomePage';
import About from './pages/AboutMe';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';


// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home />},
      { path: "about", element: <About />},
      { path: "contact", element: <Contact />},
      { path: "portfolio", element: <Portfolio />},
      { path: "resume", element: <Resume />},
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
