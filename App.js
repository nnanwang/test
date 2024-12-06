import './App.css';
import UserName from './components/UserName';
import UserEmail from './components/UserEmail';
import UpdateUser from './components/UpdateUser';
import { UserProvider } from './components/UserContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductNavigation from './components/ProductNavigation';
import NewUser from './components/NewUser';
import Profile from './components/Profile';


function App() {
  return (
    <div style={{margin:50}}>
      

      <Router>
        <div>
          <h1>Our First Multi-page App</h1>
        <ProductNavigation />
          <Routes>
          <Route path="/profile" element={<Profile />} />
            <Route path="/update-user" element={<NewUser />} />
            <Route path="/" element={
                  <UserProvider>
                  <div>
                    <h2>User Information</h2>
                    <UserName />
                    <UserEmail />
                    <UpdateUser />
                  </div>
                    </UserProvider>
            } />
        </Routes>
      </div>
    </Router>

  </div>
  );
}

export default App;


