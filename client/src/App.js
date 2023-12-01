import './App.css';
import { Outlet } from 'react-router-dom';
import { Footer } from './Components/Footer/Footer';
import { Navigation1 } from './Components/Navigation/Navigation1';
import { Navigation2 } from './Components/Navigation/Navigation2';

function App() {

  return (
    <>
      <Navigation2/>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
