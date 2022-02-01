import Header from './Components/Header';
import LoginPage from './Components/LoginPage';
import MainPage from './Components/MainPage';
import Addpost from './Components/Addpost';
import CreateAccount from './Components/CreateAccount';

import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/addpost" element={<Addpost />} />
          <Route path="/createAccount" element={<CreateAccount />}/>
          
        </Routes>
          
        
      </Router>
    </div>
  );
}

export default App;
