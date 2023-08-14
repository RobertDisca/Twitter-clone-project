import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import Explore from './Pages/Explore';
import Home from './Pages/Home';
import Login from './Pages/LogIn';
import Messages from './Pages/Messages';

function App() {
    const [isAuth, setIsAuth] = useState(false);
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/explore" element={<Explore />} />
                    <Route path="/messages" element={<Messages />} />
                    <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
