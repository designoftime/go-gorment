import './App.css';
import { Outlet } from 'react-router-dom';
import { Footer } from './Components/Footer/Footer';
import { Navigation1 } from './Components/Navigation/Navigation1';
import { Navigation2 } from './Components/Navigation/Navigation2';
import ErrorBoundaries from "./Components/ErrorBoundaries/ErrorBoundaries"
function App() {

  return (
    <ErrorBoundaries>
    <div className='main-app'>
      {/* <Navigation2/> */}
      <Navigation1/>
      <Outlet />
      <Footer />
    </div>
    </ErrorBoundaries>
  );
}

export default App;
