import './App.css';
import {Routes, Route, HashRouter} from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import MyAppbar from './components/Appbar';

const  App = () => {
    return (
      <div className="App">
        
        
      <HashRouter>
      <MyAppbar/>
      <header className="App-header">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="login" element={<Login />} /> 
        <Route path="register" element={<Register />} />
      </Routes>
      </header>
    </HashRouter>
    
    </div>
    );
}

export default App;
