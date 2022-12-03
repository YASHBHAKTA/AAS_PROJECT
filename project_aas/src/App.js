import './App.css';
import Nav from './nav'
import Login from './Login'
import Register from './Register'
import Footer from './Footer'

import Cordinatorlist from './Cordinatorlist';
import A_comp from './comp_admin'
import Admin_alumni from './admin_alumni'
import PrivateComponent from './privatecomponent';
import Userlist from './Manageuserlist';
import Updateuser from './UpdateUser'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/userlist" element={<Userlist />} />
            <Route path="/about" element={<h1>About Us Page</h1>} />
            <Route path="/Admin" element={<A_comp />} />
            <Route path="/update_user/:id" element={<Updateuser />} />
            {/* <Route path="/cordinatorlist" element={<Cordinatorlist />} /> */}
            <Route path="/Admin_alumni" element={<Admin_alumni />} />
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          

        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
