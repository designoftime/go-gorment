import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Home } from './Components/Home/Home'
import { Accounts } from './Components/Accounts/Accounts';
import { Footer } from './Components/Footer/Footer';
import { Login } from './Components/Accounts/Ollys-Login/Login';
import { Navigation2 } from './Components/Navigation/Navigation2';
import { CreateAccount } from './Components/Accounts/CreateAccount/CreateAccount';
import { ForgotPassword } from './Components/Accounts/ForgotPassword/ForgotPassword';
import { ManageSubscription } from './Components/Accounts/ManageSubscription/ManageSubscription';
import { Shop } from './Components/Shop/Shop';
import { ViewProduct } from './Components/Shop/ViewProducts/ViewProduct';
import EmailVerification from './Components/Accounts/EmailVerification/EmailVerification';
import ResetPassword from './Components/Accounts/ResetPassword/ResetPassword';
import Profile from './Components/Profile/Profile';
import PrivateRoute from './PrivateRoute';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/shop' element={<Shop />}/>
          <Route path='/shop/viewproduct' element={<ViewProduct/>}/>
          <Route path='/accounts' element={<Accounts />}/>
          <Route path='/accounts/login' element={<Login/>}/>
          <Route path='/accounts/register' element={<CreateAccount/>}/>
          <Route path='/accounts/forgotpassword' element={<ForgotPassword/>}/>
          <Route path='/accounts/managesubscription' element={<ManageSubscription/>}/>
          <Route path='/accounts/email-verification' element={<EmailVerification />}/>
          <Route path='/accounts/reset-password' element={<ResetPassword />}/>
          <Route path='/accounts' element={<PrivateRoute/>}>
            <Route path='/accounts/profile' element={<Profile/>}/>
          </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
