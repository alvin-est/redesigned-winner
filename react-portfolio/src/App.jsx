// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <>
      {/* Header */}
      <Header />
      
      {/* Main */}
        <Outlet />

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;