import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import ChangePassword from './components/ChangePassword';
import CustomPage from './components/CustomPage';
import DefaultView from './components/DefaultView';
import DefaultView2 from './components/DefaultView2';
import DeleteAccount from './components/DeleteAccount';
import V1 from "./components/V1";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/custompage" element={<CustomPage />}/>
        <Route path="/defaultview" element={<DefaultView />} />
        <Route path="/defaultview2" element={<DefaultView2 />} />
        <Route path="/deleteaccount" element={<DeleteAccount />} />
        <Route path ="V1" element={<V1 />} />
      </Routes>
    </div>
    </BrowserRouter >

  );
}

export default App;
