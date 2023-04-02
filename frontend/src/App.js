import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import ChangePassword from './components/ChangePassword';
import CustomPage from './components/CustomPage';
import DefaultView from './components/DefaultView';
import DefaultView2 from './components/DefaultView2';
import DeleteAccount from './components/DeleteAccount';
import V1 from "./components/visualisations/V1";
import V5 from "./components/visualisations/V5";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import useCheckAuth from './components/useCheckAuth';
import Navbar from './components/Navbar';
import NotLoggedNavbar from './components/NotLoggedNavbar';

function App() {
  const checkAuth = useCheckAuth()

  return (
    <>
    <BrowserRouter>
    {checkAuth ? <Navbar/> : <NotLoggedNavbar/> }
      <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/custompage" element={<CustomPage />}/>
        <Route path="/" element={<DefaultView />} />
        <Route path="/defaultview2" element={<DefaultView2 />} />
        <Route path="/deleteaccount" element={<DeleteAccount />} />
        <Route path ="/V1" element={<V1 />} />
        <Route path ="/V5" element={<V5 />} />
      </Routes>
    </div>
    </BrowserRouter >
    </>

  );
}

export default App;
