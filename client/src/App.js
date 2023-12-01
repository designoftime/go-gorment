import './App.css';
import { Outlet } from 'react-router-dom';
import { Footer } from './Components/Footer/Footer';
import { Navigation1 } from './Components/Navigation/Navigation1';
import { Navigation2 } from './Components/Navigation/Navigation2';
import ErrorBoundaries from "./Components/ErrorBoundaries/ErrorBoundaries"
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StoreData } from './Redux/actions/storeSettingServices';
function App() {

  const dispatch = useDispatch();
  const headerData = useSelector(store => store.storeSettings?.navbar);

  useEffect(() => {
    dispatch(StoreData());
  }, []);

  return (
    <ErrorBoundaries>
    <div className='main-app'>
      <Navigation1 headerData={headerData}/>
      <Outlet />
      <Footer />
    </div>
    </ErrorBoundaries>
  );
}

export default App;
