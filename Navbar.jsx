import React from 'react';
import './Navbar.css';
import {BrowserRouter as Router ,Route ,Routes , Link} from 'react-router-dom';
import Home from './Home';
import About from './about';
import Contact from './contact';
const App = () => {
    return (
        <Router>
            {/* Navigation Bar */}
            <nav style={{ padding: '10px', background: '#eee' }}>
                <ul style={{ display: 'flex', listStyle: 'none', gap: '10px', margin: 0 }}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
            </nav>

            {/* Routes */}
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
};

export default App;

// const Navbar = () => {
//     return (
//         <nav className="navbar">
//             <h1 className="logo">MyApp</h1>
//             <ul className="nav-links">
//                 <li><a href="#home" className="link">Home</a></li>
//                 <li><a href="#about" className="link">About</a></li>
//                 <li><a href="#contact" className="link">Contact</a></li>
//             </ul>
//         </nav>
//     );
// };

// export default Navbar;