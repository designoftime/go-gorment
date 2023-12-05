import './App.css';
import { Outlet } from 'react-router-dom';
import { Footer } from './Components/Footer/Footer';
import { Navigation1 } from './Components/Navigation/Navigation1';
import ErrorBoundaries from "./Components/ErrorBoundaries/ErrorBoundaries"
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StoreData } from './Redux/actions/storeSettingServices';
function App() {

  const dispatch = useDispatch();
  const headerData = useSelector(store => store.storeSettings?.navbar);

  useEffect(() => {
    dispatch(StoreData());
  }, []);

  const [showNavigation2, setShowNavigation2] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      setShowNavigation2(scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    
    // <ErrorBoundaries>
      <div className='main-app'>
        
        <Navigation1 headerData={headerData} />
        <Outlet />
      </div>
    // </ErrorBoundaries>
  );
}

export default App;
