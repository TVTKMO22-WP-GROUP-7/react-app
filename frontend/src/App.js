import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import ChangePassword from './components/ChangePassword';
import CustomPage from './components/CustomPage';
import DefaultView from './components/DefaultView';
import DefaultView2 from './components/DefaultView2';
import DeleteAccount from './components/DeleteAccount';
import V1 from "./components/visualisations/V1";
import V2 from "./components/visualisations/V2";
import V4 from "./components/visualisations/V4";
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
        <Route path="/login" element={!checkAuth ? <Login /> : <DefaultView/>} />
        <Route path="/register" element={!checkAuth ? <Register /> : <DefaultView/>} />
        <Route path="/changepassword" element={checkAuth ? <ChangePassword /> : <DefaultView/>} />
        <Route path="/custompage" element={checkAuth ? <CustomPage /> : <DefaultView/>}/>
        <Route path="/" element={<DefaultView />} />
        <Route path="/defaultview2" element={<DefaultView2 />} />
        <Route path="/deleteaccount" element={checkAuth ? <DeleteAccount /> : <DefaultView/>} />
        <Route path='*' element={<DefaultView />} />
        <Route path ="/V1" element={<V1 />} />
        <Route path= "/V2" element= {<V2 />} />
        <Route path ="/V4" element={<V4 />} />
        <Route path ="/V5" element={<V5 />} />
      </Routes>
    </div>
    </BrowserRouter >
    </>

  );
}

export default App;
