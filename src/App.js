import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import RegisterForm from './React-Projuct/RegisterForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './React-Projuct/LoginForm';
import {CreateProducts} from "./React-Projuct/CreateProducts"
import Dashboard from './React-Projuct/layout';
import { EditProduct } from './React-Projuct/EditProduct';

function App() {
  return (
    <Router>
      
        <Routes>
        
          <Route path="/login" element={<LoginForm />} />
          <Route path="/" element={<RegisterForm/>} />
          
          <Route path='/Admin/Products' element={<Dashboard/>}/>
          <Route path='/Admin/Products/Create' element={<CreateProducts />}/>
          <Route path="/Admin/Products/edit/:id" element={<EditProduct />} />

        </Routes>
      
    </Router>
  );
}

export default App;
