import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './views/Home';
import Report from './views/Report';
import ReportComponent from './components/ReportComponent/title';
import '/node_modules/primeflex/primeflex.css'
function App() {
    return (
      <Router>
      <div>
        <Navbar /> {/* Add Navbar component */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home route */}
          {Report.map((route, index) => (
            <Route key={index} path={route.path} element={<ReportComponent label = {route.label}><route.component /></ReportComponent>} />
          ))}
        </Routes>
      </div>
    </Router>
    );
}

export default App;
